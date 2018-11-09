import { Middleware } from 'redux';
import { SynchronousPromise } from 'synchronous-promise';
import { deleteDocument, deleteDocumentSuccess, updateDocuments, getDocuments, updateIsLoading, uploadDocument, uploadDocumentSuccess } from '../actions';
import { createAppMiddleware } from './createAppMiddleware';
import { IGetDocuments, IUploadDocument, IDeleteDocuments } from '../services/documents';

describe('app middleware', () => {
  let middleware:Middleware;
  let dispatchSpy:any;
  let nextSpy:any;
  let api:any;
  let getDocumentsSpy:IGetDocuments;
  let getDocumentsMock:any;  
  let deleteDocumentSpy:IDeleteDocuments;
  let deleteDocumentMock:any;
  let uploadDocumentSpy:IUploadDocument;
  let uploadDocumentMock:any;
  const MOCK_DOCUMENT1 = {
    id: 1,
    filename:'123test',
    originalFilename:'test',
    fileSize:1.23,
    fileExtension:'.txt',
    created_at:'01 Jan 2018',
    updated_at:'01 Jan 2018'
  };
  const MOCK_DOCUMENT2 = {
    id: 2,
    filename:'456test',
    originalFilename:'test',
    fileSize:1.23,
    fileExtension:'.txt',
    created_at:'02 Jan 2018',
    updated_at:'02 Jan 2018'
  };
  const DOCUMENTS_MOCK = [MOCK_DOCUMENT1, MOCK_DOCUMENT2];

  const DELETE_DOC_MOCK = {
    status: true,
    data: null,
    message: 'Deleted document!'
  };

  const UPLOAD_DOC_MOCK = {
    status: true,
    data: null,
    message: 'Document updloaded!'
  };
  
  beforeEach(() => {
    getDocumentsMock = SynchronousPromise.resolve({
      data: DOCUMENTS_MOCK
    });
    getDocumentsSpy = jasmine.createSpy('').and.returnValue(getDocumentsMock);
    deleteDocumentMock = SynchronousPromise.resolve(DELETE_DOC_MOCK);
    deleteDocumentSpy = jasmine.createSpy('').and.returnValue(deleteDocumentMock);
    uploadDocumentMock = SynchronousPromise.resolve(UPLOAD_DOC_MOCK);
    uploadDocumentSpy = jasmine.createSpy('').and.returnValue(uploadDocumentMock);
    dispatchSpy = jasmine.createSpy('');
    nextSpy = jasmine.createSpy('');
    api = {
      dispatch: dispatchSpy
    };
    middleware = createAppMiddleware(getDocumentsSpy, deleteDocumentSpy, uploadDocumentSpy);
  });
  
  // Get
  test('should call getDocuments if getDocuments action is received', () => {
    middleware(api)(nextSpy)(getDocuments());
    expect(getDocumentsSpy).toBeCalled();
  });

  test('should dispatch updateIsLoading to true once getDocuments is called', async () => {
    middleware(api)(nextSpy)(getDocuments());
    expect(dispatchSpy).toBeCalledWith(updateIsLoading(true));
  });

  test('should dispatch updateDocuments once getDocuments returns', async () => {
    middleware(api)(nextSpy)(getDocuments());
    expect(dispatchSpy).toBeCalledWith(updateDocuments(DOCUMENTS_MOCK));
  });

  test('should dispatch updateIsLoading to false once getDocuments is called', async () => {
    middleware(api)(nextSpy)(getDocuments());
    expect(dispatchSpy).toBeCalledWith(updateIsLoading(false));
  });

  // Delete
  test('should call uploadDocuments if uploadDocuments action is received', () => {
    const docId = 1;
    middleware(api)(nextSpy)(deleteDocument(docId));
    expect(deleteDocumentSpy).toBeCalled();
  });

  test('should dispatch updateDocuments once uploadDocuments returns', async () => {
    const docId = 1;
    middleware(api)(nextSpy)(deleteDocument(docId));
    expect(dispatchSpy).toBeCalledWith(deleteDocumentSuccess(DELETE_DOC_MOCK));
  });

  // Upload
  test('should call uploadDocuments if uploadDocuments action is received', () => {
    const doc = new FormData();
    middleware(api)(nextSpy)(uploadDocument(doc));
    expect(uploadDocumentSpy).toBeCalled();
  });

  test('should dispatch updateIsLoading to true once uploadDocuments is called', async () => {
    const doc = new FormData();
    middleware(api)(nextSpy)(uploadDocument(doc));
    expect(dispatchSpy).toBeCalledWith(updateIsLoading(true));
  });

  test('should dispatch updateDocuments once uploadDocuments returns', async () => {
    const doc = new FormData();
    middleware(api)(nextSpy)(uploadDocument(doc));
    expect(dispatchSpy).toBeCalledWith(uploadDocumentSuccess(UPLOAD_DOC_MOCK));
  });

  test('should dispatch updateIsLoading to false once uploadDocuments is called', async () => {
    const doc = new FormData();
    middleware(api)(nextSpy)(uploadDocument(doc));
    expect(dispatchSpy).toBeCalledWith(updateIsLoading(false));
  });

  
  
});

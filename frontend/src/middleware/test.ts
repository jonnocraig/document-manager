import { Middleware } from 'redux';
import { SynchronousPromise } from 'synchronous-promise';
import { updateDocuments, getDocuments } from '../actions';
import { createAppMiddleware } from './createAppMiddleware';
import { IGetDocuments } from '../services/documents';

describe('app middleware', () => {
  let middleware:Middleware;
  let getDocumentsSpy:IGetDocuments;
  let dispatchSpy:any;
  let nextSpy:any;
  let api:any;
  let getDocumentsMock:any;
  let filterDocumentsMock:IGetDocuments;
  let deleteDocumentsMock:IGetDocuments;
  let uploadDocumentsMock:IGetDocuments;
  
  const DOCUMENTS_MOCK = [{
    id: 1,
    filename:'123test',
    originalFilename:'test',
    fileSize:1.23,
    created_at:'01 Jan 2018',
    updated_at:'01 Jan 2018'
  }];
  
  beforeEach(() => {
    getDocumentsMock = SynchronousPromise.resolve({
      documents: DOCUMENTS_MOCK
    });
    getDocumentsSpy = jasmine.createSpy('').and.returnValue(getDocumentsMock);
    dispatchSpy = jasmine.createSpy('');
    nextSpy = jasmine.createSpy('');
    api = {
      dispatch: dispatchSpy
    };
    middleware = createAppMiddleware(getDocumentsSpy, filterDocumentsMock, deleteDocumentsMock, uploadDocumentsMock);
  });
  
  test('should call getDocuments if getDocuments action is received', () => {
    middleware(api)(nextSpy)(getDocuments());
    expect(getDocumentsSpy).toBeCalled();
  });

  test('should dispatch updateDocuments once getDocuments returns', () => {
    middleware(api)(nextSpy)(getDocuments());
    expect(dispatchSpy).toBeCalledWith(updateDocuments(DOCUMENTS_MOCK));
  });
  
});

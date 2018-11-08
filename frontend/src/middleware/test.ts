import { Middleware } from 'redux';
import { updateDocuments, getDocuments } from '../actions';
import { createAppMiddleware } from './createAppMiddleware';
import { IGetDocuments } from '../services/getDocuments';

describe('app middleware', () => {
  let middleware:Middleware;
  let dispatchSpy:any;
  let nextSpy:any;
  let api:any;
  let getDocumentsMock:IGetDocuments;
  
  const DOCUMENTS_MOCK = [{
    id: 1,
    filename:'123test',
    originalFilename:'test',
    fileSize:1.23,
    created_at:'01 Jan 2018',
    updated_at:'01 Jan 2018'
  }];
  
  beforeEach(() => {
    getDocumentsMock = jasmine.createSpy('').and.returnValue(DOCUMENTS_MOCK);
    dispatchSpy = jasmine.createSpy('');
    nextSpy = jasmine.createSpy('');
    api = {
      dispatch: dispatchSpy
    };
    middleware = createAppMiddleware(getDocumentsMock);
  });
  
  test('should call getDocuments if getDocuments action is received', () => {
    middleware(api)(nextSpy)(getDocuments());
    expect(getDocumentsMock).toBeCalled();
  });

  test('should dispatch updateDocuments once getDocuments returns', () => {
    middleware(api)(nextSpy)(getDocuments());
    expect(dispatchSpy).toBeCalledWith(updateDocuments(DOCUMENTS_MOCK));
  });
  
});

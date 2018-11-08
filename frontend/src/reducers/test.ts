import { IStoreState } from '../types';
import { getDocuments, updateDocuments } from '../actions';
import { appReducer } from './';

describe('appReducer', () => {
  let newState;
  let state:IStoreState;

  const DOCUMENTS_MOCK = [{
    id: 1,
    filename:'123test',
    originalFilename:'test',
    fileSize:1.23,
    created_at:'01 Jan 2018',
    updated_at:'01 Jan 2018'
  }];

  beforeEach(() => {
    newState = null;
    state = {
      documents: null
    };

  });
  
  test('should return original state if action not relevant', () => {
    newState = appReducer(state, { type: null });
    expect(newState).toBe(state);
  });
  
  test('should update app state on receiving updateDocuments', () => {
    const expectedState = {
        ...state,
       documents: DOCUMENTS_MOCK
      };
    newState = appReducer(state, updateDocuments(DOCUMENTS_MOCK));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(expectedState);
  });
  
  
});

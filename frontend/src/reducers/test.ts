import { IStoreState } from '../types';
import { updateDocuments, filterDocuments, updateIsLoading, resetState } from '../actions';
import { appReducer, rootReducer } from './';

describe('appReducer', () => {
  let newState;
  let state:IStoreState;

  const DOCUMENTS_MOCK = [{
    id: 1,
    filename:'123test',
    originalFilename:'test',
    fileSize:1.23,
    fileExtension:'.txt',
    created_at:'01 Jan 2018',
    updated_at:'01 Jan 2018'
  }];

  const FILTER = 'test';

  beforeEach(() => {
    newState = null;
    state = {
      documents: null,
      filter: '',
      loading: false
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

  test('should update app state on receiving filterDocuments', () => {
    const expectedState = {
        ...state,
       filter: FILTER
      };
    newState = appReducer(state, filterDocuments(FILTER));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(expectedState);
  });

  test('should update app state on receiving updateIsLoading', () => {
    const expectedState = {
        ...state,
       loading: true
      };
    newState = appReducer(state, updateIsLoading(true));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(expectedState);
  });

  test('should reset app state on receiving resetState', () => {
    const expectedLoadingState = {
      ...state,
     loading: true
    };

    const expectedState = {
        documents: null,
        filter: '',
       loading: false
    };
    // update loading state
    newState = rootReducer(state, updateIsLoading(true));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(expectedLoadingState);
    // check that it's been reset
    const updatedState = rootReducer(newState, resetState());
    expect(updatedState).not.toBe(expectedLoadingState);
    expect(updatedState).toEqual(expectedState);
  });
  
  
});

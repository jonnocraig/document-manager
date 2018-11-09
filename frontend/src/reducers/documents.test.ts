import { IDocument } from '../types';
import { updateDocuments, uploadDocumentSuccess, deleteDocumentSuccess } from '../actions';
import documentsReducer from './documents';

describe('appReducer', () => {
  let newState;
  let state:IDocument[] | null;

  const DOCUMENT = {
    id: 1,
    filename:'123test',
    originalFilename:'test',
    fileSize:1.23,
    fileExtension:'.txt',
    created_at:'01 Jan 2018',
    updated_at:'01 Jan 2018'
  };
  const DOCUMENTS_MOCK = [DOCUMENT];

  const UPLOAD_DOC_MOCK = {
    status: true,
    data: [DOCUMENT],
    message: ''
  };

  const UPLOAD_DOC_MOCK_NULL = {
    status: true,
    data: null,
    message: ''
  };

  const DELETE_DOC_MOCK = {
    status: true,
    data: 1,
    message: ''
  };

  beforeEach(() => {
    newState = null;
    state = null;
  });
  
  test('should return original state if action not relevant', () => {
    newState = documentsReducer(state, { type: null });
    expect(newState).toBe(state);
  });
  
  test('should update document state on receiving updateDocuments', () => {
    const expectedState = [
       ...DOCUMENTS_MOCK
    ];
    newState = documentsReducer(state, updateDocuments(DOCUMENTS_MOCK));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(expectedState);
  });

  test('should update document state on receiving uploadDocumentSuccess ', () => {
    const expectedState = [
       ...DOCUMENTS_MOCK
    ];
    newState = documentsReducer(state, uploadDocumentSuccess(UPLOAD_DOC_MOCK));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(expectedState);
  });

  test('should not update document state on receiving uploadDocumentSuccess with null data', () => {
    newState = documentsReducer(state, uploadDocumentSuccess(UPLOAD_DOC_MOCK_NULL));
    expect(newState).toBe(state);
  });

  test('should update document state on receiving deleteDocumentSuccess', () => {
    const populatedState = [
       ...DOCUMENTS_MOCK
    ];
    newState = documentsReducer(populatedState, deleteDocumentSuccess(DELETE_DOC_MOCK));
    expect(newState).not.toBe(populatedState);
    expect(newState).toEqual([]);
  });
  
});

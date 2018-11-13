import MockAdapter from 'axios-mock-adapter';
import * as documentService from './documents';
import { documentsApi } from './documents';

const mockResponse = {
  documents: [{"id":1,"filename":"test1","originalFilename":"test","fileSize":1,"created_at":"2018-11-08 12:40:08","updated_at":"2018-11-08 12:40:08"},{"id":2,"filename":"test1","originalFilename":"test","fileSize":1,"created_at":"2018-11-08 12:40:40","updated_at":"2018-11-08 12:40:40"},{"id":3,"filename":"1541681008README.md","originalFilename":"README.md","fileSize":3,"created_at":"2018-11-08 12:43:28","updated_at":"2018-11-08 12:43:28"}]
};
const mockPostResponse = {
  status: true,
  data: null,
  message: 'Uploaded successfully!'
};
const mockDeleteResponse = {
  status: true,
  data: null,
  message: 'Uploaded successfully!'
};
const errorMock = {
  status: false,
  data: null,
  message: 'An error occurred'
};
let mock:any;

beforeEach(() => {
  mock = new MockAdapter(documentsApi);
});

afterEach(() => {
  mock.reset();
});

describe('<documentService>', () => {
  
  test('should return an array of documents', () => {
    const docs = documentService.getDocs();
    expect(docs).toBeTruthy();
  });

  test('should return valid response when getDocs called', () => {
    mock.onGet('/documents').reply(200, mockResponse);

    return documentService.getDocs()
      .then((response) => {
        expect(response.data).toEqual(mockResponse)
      });
  });

  test('should throw an error when getDocs called but fails', () => {
    mock.onGet('/documents').reply(500);

    return documentService.getDocs()
      .then(response => Promise.reject(errorMock))
      .catch((err:any) => {
        expect(err).toEqual(errorMock);
        return Promise.resolve();
      });
  });

  test('should return valid response when uploadDoc called', () => {
    mock.onPost('/documents').reply(200, mockPostResponse);

    const doc = new FormData();

    return documentService.uploadDoc(doc)
      .then((response) => {
        expect(response).toEqual(mockPostResponse)
      });
  });

  test('should throw an error when uploadDoc called but fails', () => {
    mock.onPost('/documents').reply(500);
    const doc = new FormData();

    return documentService.uploadDoc(doc)
      .then(response => Promise.reject(errorMock))
      .catch((err:any) => {
        expect(err).toEqual(errorMock);
        return Promise.resolve();
      });
  });

  test('should return valid response when deleteDoc called', () => {
    const docId = 1;
    mock.onDelete(`/documents/${docId}`).reply(200, mockDeleteResponse);

    return documentService.deleteDoc(docId)
      .then((response) => {
        expect(response).toEqual(mockDeleteResponse)
      });
  });

  test('should throw an error when deleteDoc called but fails', () => {
    const docId = 1;
    mock.onDelete(`/documents/${docId}`).reply(500);

    return documentService.deleteDoc(docId)
      .then(response => Promise.reject(errorMock))
      .catch((err:any) => {
        expect(err).toEqual(errorMock);
        return Promise.resolve();
      });
  });

});

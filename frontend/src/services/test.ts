//import configureMockStore from 'redux-mock-store';
//import MockAdapter from 'axios-mock-adapter';
import * as documentService from './documents';
//import { documentsApi } from '../services/documents';

// const mockStore = configureMockStore();
// const mockResponse = [{"id":1,"filename":"test1","originalFilename":"test","fileSize":1,"created_at":"2018-11-08 12:40:08","updated_at":"2018-11-08 12:40:08"},{"id":2,"filename":"test1","originalFilename":"test","fileSize":1,"created_at":"2018-11-08 12:40:40","updated_at":"2018-11-08 12:40:40"},{"id":3,"filename":"1541681008README.md","originalFilename":"README.md","fileSize":3,"created_at":"2018-11-08 12:43:28","updated_at":"2018-11-08 12:43:28"}];
// let mock;

// beforeEach(function() {
//   mock = new MockAdapter(documentsApi);
// });

// afterEach(function() {
//   mock.reset();
// });

describe('<documentService>', () => {
  
  test('should return an array of documents', () => {
    const docs = documentService.getDocs();
    expect(docs).toBeTruthy();
  });

});

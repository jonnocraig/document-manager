import { getDocuments } from './getDocuments';

describe('<getDocuments>', () => {
  
  test('should return an array of documents', () => {
    const docs = getDocuments();
    expect(docs).toBeTruthy();
  });

});

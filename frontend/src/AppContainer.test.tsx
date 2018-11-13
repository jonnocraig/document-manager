import { mapStateToProps, mapDispatchToProps } from './AppContainer';
import { appReducer } from './reducers';
import { IStoreState } from './types';
import * as actions from './actions';

describe('selection-step-container', () => {
  let storeState:IStoreState;
  let containerState:any;
  let dispatchSpy: jest.SpyInstance;
  const DOCUMENT_ID = 1;
  const DOCUMENT = {
    id: DOCUMENT_ID,
    filename:'123test',
    originalFilename:'test',
    fileSize:1.23,
    fileExtension:'.txt',
    created_at:'01 Jan 2018',
    updated_at:'01 Jan 2018'
  };
  const FILTER = 'abc';
  const DOC = new FormData();

  beforeEach(() => {
    storeState = appReducer(undefined, { type: null });
    containerState = null;
    dispatchSpy = jest.fn();
  });

  describe('mapStateToProps', () => {
    it('should set container.documents to store.documents', () => {
      storeState.documents = [];
      containerState = mapStateToProps(storeState);
      expect(containerState.documents).toEqual(storeState.documents);

      storeState.documents = [DOCUMENT];
      containerState = mapStateToProps(storeState);
      expect(containerState.documents).toEqual(storeState.documents);
    });

    it('should set container.filer to store.filter', () => {
      storeState.filter = '';
      containerState = mapStateToProps(storeState);
      expect(containerState.filter).toEqual(storeState.filter);

      storeState.filter = FILTER;
      containerState = mapStateToProps(storeState);
      expect(containerState.filter).toEqual(storeState.filter);
    });

    it('should set container.loading to store.loading', () => {
      storeState.loading = false;
      containerState = mapStateToProps(storeState);
      expect(containerState.loading).toEqual(storeState.loading);

      storeState.loading = true;
      containerState = mapStateToProps(storeState);
      expect(containerState.loading).toEqual(storeState.loading);
    });
  });

  describe('mapDispatchToProps', () => {
  
    it('should dispatch a deleteDocument action if the state.handleDeleteDoc prop is called', () => {
      const mapDispatchFuncs = mapDispatchToProps(dispatchSpy);
      mapDispatchFuncs.handleDeleteDoc(DOCUMENT_ID);
      expect(dispatchSpy.mock.calls[0][0]).toEqual(actions.deleteDocument(DOCUMENT_ID));
    });

    it('should dispatch a filterDocuments action if the state.handleFilterDocs prop is called', () => {
      const mapDispatchFuncs = mapDispatchToProps(dispatchSpy);
      mapDispatchFuncs.handleFilterDocs(FILTER);
      expect(dispatchSpy.mock.calls[0][0]).toEqual(actions.filterDocuments(FILTER));
    });

    it('should dispatch a getDocuments action if the state.handleGetDocs prop is called', () => {
      const mapDispatchFuncs = mapDispatchToProps(dispatchSpy);
      mapDispatchFuncs.handleGetDocs();
      expect(dispatchSpy.mock.calls[0][0]).toEqual(actions.getDocuments());
    });

    it('should dispatch a uploadDocument action if the state.handleUploadDoc prop is called', () => {
      const mapDispatchFuncs = mapDispatchToProps(dispatchSpy);
      mapDispatchFuncs.handleUploadDoc(DOC);
      expect(dispatchSpy.mock.calls[0][0]).toEqual(actions.uploadDocument(DOC));
    });
    
  });
});

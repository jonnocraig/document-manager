import { connect } from 'react-redux';
import { App, IAppProps, IAppDispatchProps } from './App';
import * as actions from './actions';
import { IStoreState } from './types';

export const getDocs = (state:IStoreState) => {
  return state.documents ? 
    state.documents.filter((doc, i) => doc.originalFilename.includes(state.filter)).sort((doc, prevDoc) => doc.id - prevDoc.id) :
    null
};

export const mapStateToProps = (state:IStoreState):IAppProps  => ({
  documents: getDocs(state),
  filter: state.filter,
  loading: state.loading
});

export const mapDispatchToProps = (dispatch:any):IAppDispatchProps => ({
  handleGetDocs: () =>
    dispatch(actions.getDocuments()),
  handleFilterDocs: (filter:string) =>
    dispatch(actions.filterDocuments(filter)),
  handleDeleteDoc: (id:number) => 
    dispatch(actions.deleteDocument(id)),
  handleUploadDoc: (doc:FormData) =>
    dispatch(actions.uploadDocument(doc)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
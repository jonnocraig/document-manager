import { connect } from 'react-redux';
import { App, IAppProps, IAppDispatchProps } from './App';
import * as actions from './actions';
import { IStoreState } from './types';

export const mapStateToProps = (state:IStoreState):IAppProps  => ({
  documents: state.documents,
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
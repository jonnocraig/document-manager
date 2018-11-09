import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import * as actions from '../actions';
import * as constants from '../constants';
import { IGetDocuments } from '../services/documents';

export const createAppMiddleware = (
    getDocuments:IGetDocuments,
    filterDocuments:IGetDocuments,
    deleteDocuments:IGetDocuments,
    uploadDocuments:IGetDocuments,
  ):Middleware => {
  return (api: MiddlewareAPI<any>) => (next: Dispatch<AnyAction>) => <A extends AnyAction>(action: A) => {
    if (action.type === constants.GET_DOCUMENTS) {
      api.dispatch(actions.updateIsLoading(true));
      getDocuments()
        .then((response) => {
          api.dispatch(actions.updateDocuments(response.documents));
          api.dispatch(actions.updateIsLoading(false));
        })
        .catch((err:any) => {
          api.dispatch(actions.updateIsLoading(false));
        });
    } else if (action.type === constants.FILTER_DOCUMENTS) {
      api.dispatch(actions.updateIsLoading(true));
      filterDocuments()
        .then((response) => {
          api.dispatch(actions.updateDocuments(response.documents));
          api.dispatch(actions.updateIsLoading(false));
        })
        .catch((err:any) => {
          api.dispatch(actions.updateIsLoading(false));
        });
    } else if (action.type === constants.DELETE_DOCUMENTS) {
      deleteDocuments()
        .then((response) => {
          api.dispatch(actions.updateDocuments(response.documents));
          api.dispatch(actions.updateIsLoading(false));
        })
        .catch((err:any) => {
          api.dispatch(actions.updateIsLoading(false));
        });
    } else if (action.type === constants.UPLOAD_DOCUMENT) {
      uploadDocuments()
        .then((response) => {
          api.dispatch(actions.updateDocuments(response.documents));
          api.dispatch(actions.updateIsLoading(false));
        })
        .catch((err:any) => {
          api.dispatch(actions.updateIsLoading(false));
        });
    } 
   return next(action);
  };
}

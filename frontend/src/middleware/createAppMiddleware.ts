import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import * as actions from '../actions';
import * as constants from '../constants';
import { IGetDocuments, IUploadDocument, IDeleteDocuments } from '../services/documents';

export const createAppMiddleware = (
    getDocuments:IGetDocuments,
    deleteDocuments:IDeleteDocuments,
    uploadDocuments:IUploadDocument,
  ):Middleware => {
  return (api: MiddlewareAPI<any>) => (next: Dispatch<AnyAction>) => <A extends AnyAction>(action: A) => {
    if (action.type === constants.GET_DOCUMENTS) {
      api.dispatch(actions.updateIsLoading(true));
      getDocuments()
        .then((response) => {
          api.dispatch(actions.updateDocuments(response.data));
          api.dispatch(actions.updateIsLoading(false));
        })
        .catch((err:any) => {
          api.dispatch(actions.updateIsLoading(false));
        });
    } else if (action.type === constants.DELETE_DOCUMENT) {
      deleteDocuments(action.payload)
        .then((response) => {
          if (!response.status) {
            return api.dispatch(actions.deleteDocumentFail({
              status: false, data: null, message: 'An error occured'
            }));
          }
          api.dispatch(actions.deleteDocumentSuccess(response));
        })
        .catch((err:any) => {
          api.dispatch(actions.deleteDocumentFail({
            status: false, data: null, message: 'An error occured'
          }));
        });
    } else if (action.type === constants.UPLOAD_DOCUMENT) {
      api.dispatch(actions.updateIsLoading(true));
      uploadDocuments(action.payload)
        .then((response) => {
          if (!response.status) {
            api.dispatch(actions.updateIsLoading(false));
            return api.dispatch(actions.deleteDocumentFail({
              status: false, data: null, message: 'An error occured'
            }));
          }
          api.dispatch(actions.uploadDocumentSuccess(response));
          api.dispatch(actions.updateIsLoading(false));
        })
        .catch((err:any) => {
          api.dispatch(actions.updateIsLoading(false));
          api.dispatch(actions.deleteDocumentFail({
            status: false, data: null, message: 'An error occured'
          }));
        });
    }
   return next(action);
  };
}

import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import * as actions from '../actions';
import * as constants from '../constants';
import { IGetDocuments } from '../services/getDocuments';

export const createAppMiddleware = (getDocuments:IGetDocuments):Middleware => {
  return (api: MiddlewareAPI<any>) => (next: Dispatch<AnyAction>) => <A extends AnyAction>(action: A) => {
    if (action.type === constants.GET_DOCUMENTS) {
      api.dispatch(actions.updateIsLoading(true));
      const docs = getDocuments();
      
      api.dispatch(actions.updateDocuments(docs));
      api.dispatch(actions.updateIsLoading(false));
      
      
    } 
   return next(action);
  };
}

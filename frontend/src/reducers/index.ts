import { combineReducers } from 'redux';
import { IStoreState, IDocument } from '../types';
import * as actions from '../actions';
import * as constants from '../constants';

const initialDocuments = null;

export const appReducer = combineReducers<IStoreState>({
  documents: (state:IDocument[] | null = initialDocuments, action:actions.IUpdateDocuments) => 
      action.type === constants.UPDATE_DOCUMENTS ? action.payload : state
});

export const rootReducer = (state: IStoreState, action: any): IStoreState => {
  if (action.type === constants.CLEAR_STATE) {
    return {
      ...appReducer(undefined, action)
    };
  }
  return appReducer(state, action)
};
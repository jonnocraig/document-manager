import { combineReducers } from 'redux';
import { IStoreState } from '../types';
import * as actions from '../actions';
import * as constants from '../constants';
import documentsReducer from './documents';

export const appReducer = combineReducers<IStoreState>({
  documents: documentsReducer,
  filter: (state:string = '', action:actions.IFilterDocument) =>
    action.type === constants.FILTER_DOCUMENTS ? action.payload : state,
  loading: (state:boolean = false, action:actions.IUpdateIsLoading) =>
    action.type === constants.IS_LOADING ? action.payload : state
});

export const rootReducer = (state: IStoreState, action: any): IStoreState => {
  if (action.type === constants.CLEAR_STATE) {
    return {
      ...appReducer(undefined, action)
    };
  }
  return appReducer(state, action)
};
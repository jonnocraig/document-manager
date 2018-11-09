import { IDocument } from '../types';
import * as constants from '../constants';

const documentsReducer = (state:IDocument[] | null = null, action:any) => {
  const { type } = action;
  
  switch (type) {
    case constants.UPDATE_DOCUMENTS:
      return action.payload;      
    case constants.UPLOAD_DOCUMENT_SUCCESS:
      if (action.payload.data && state) {
        return [...action.payload.data, ...state];
      } else if (action.payload.data && !state) {
        return [...action.payload.data];
      }
      return state;      
    case constants.DELETE_DOCUMENT_SUCCESS:
      if (state && action.payload.data) {
        return state.filter(doc => doc.id !== action.payload.data);
      }
      return state;      
    default:
      return state;
  }
}

export default documentsReducer;
import axios from 'axios';
import * as constants from '../constants';
import { IDocument } from '../types';

export const documentsApi = axios.create({ baseURL: constants.apiUrl })

export interface IGetDocumentsResult {
  documents:IDocument[] | null
}

export interface IGetDocuments {
  ():Promise<IGetDocumentsResult>
}

export const getDocs:IGetDocuments = ():Promise<IGetDocumentsResult> => {
  return documentsApi.get('/documents')
    .then((response:any) => {
      return {
        documents: response.data
      };
    })
    .catch((error:any) => {
      return {
        documents: null
      };
    })
}

export const filterDocs:IGetDocuments = ():Promise<IGetDocumentsResult> => {
  return documentsApi.get('/documents')
    .then((response:any) => {
      return {
        documents: null
      };
    })
    .catch((error:any) => {
      return {
        documents: null
      };
    })
}

export const deleteDoc:IGetDocuments = ():Promise<IGetDocumentsResult> => {
  return documentsApi.get('/documents')
    .then((response:any) => {
      return {
        documents: null
      };
    })
    .catch((error:any) => {
      return {
        documents: null
      };
    })
}

export const uploadDoc:IGetDocuments = ():Promise<IGetDocumentsResult> => {
  return documentsApi.get('/documents')
    .then((response:any) => {
      return {
        documents: null
      };
    })
    .catch((error:any) => {
      return {
        documents: null
      };
    })
}

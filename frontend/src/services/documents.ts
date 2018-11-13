import axios from 'axios';
import * as constants from '../constants';

export const documentsApi = axios.create({ baseURL: constants.apiUrl });

export type IGetDocuments = () =>Promise<IResponse>;

export interface IResponse {
  status: boolean,
  data: any,
  message:string
}

export type IUploadDocument = (doc:FormData) =>Promise<IResponse>;

export type IDeleteDocuments = (id:number) =>Promise<IResponse>;

export const getDocs:IGetDocuments = ():Promise<IResponse> => {
  return documentsApi.get('/documents')
    .then((response:any) => {
      return {
        status: true,
        data: response.data,
        message: ''
      };
    })
    .catch((error:any) => {
      return {
        status: false,
        data: null,
        message: 'An error occurred'
      };
    })
}

export const deleteDoc:IDeleteDocuments = (id:number):Promise<IResponse> => {
  return documentsApi.delete(`/documents/${id}`)
    .then((response:any) => {
      return {
        status: response.data.status,
        data: response.data.data && Number(response.data.data),
        message: response.data.message
      };
    })
    .catch((error:any) => {
      return {
        status: false,
        data: null,
        message: 'An error occurred'
      };
    })
}

export const uploadDoc:IUploadDocument = (doc:FormData):Promise<IResponse> => {
  return documentsApi.post('/documents', doc)
    .then((response:any) => {
      return {
        status: response.data.status,
        data: response.data.data && [response.data.data],
        message: response.data.message
      };
    })
    .catch((error:any) => {
      return {
        status: false,
        data: null,
        message: 'An error occurred'
      };
    })
}

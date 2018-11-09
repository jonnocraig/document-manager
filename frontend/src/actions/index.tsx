import * as constants from '../constants';
import { IDocument } from '../types';
import { IResponse } from '../services/documents';


export interface IGetDocuments {
    type: constants.GET_DOCUMENTS
}

export function getDocuments():IGetDocuments {
    return {
        type: constants.GET_DOCUMENTS
    };
}

export interface IUpdateDocuments {
    type: constants.UPDATE_DOCUMENTS,
    payload: IDocument[] | null
}

export function updateDocuments(docs:IDocument[] | null):IUpdateDocuments {
    return {
        type: constants.UPDATE_DOCUMENTS,
        payload: docs
    };
}

export interface IFilterDocument {
    type: constants.FILTER_DOCUMENTS,
    payload: string
}

export function filterDocuments(filter:string):IFilterDocument {
    return {
        type: constants.FILTER_DOCUMENTS,
        payload: filter
    };
}

export interface IUpdateIsLoading {
    type: constants.IS_LOADING,
    payload: boolean
}

export function updateIsLoading(loading:boolean):IUpdateIsLoading {
    return {
        type: constants.IS_LOADING,
        payload: loading
    };
}

export interface IUploadDocument {
    type: constants.UPLOAD_DOCUMENT,
    payload: FormData
}

export function uploadDocument(document:FormData):IUploadDocument {
    return {
        type: constants.UPLOAD_DOCUMENT,
        payload: document
    };
}

export interface IUploadDocumentSuccess {
    type: constants.UPLOAD_DOCUMENT_SUCCESS,
    payload: IResponse
}

export function uploadDocumentSuccess(response:IResponse):IUploadDocumentSuccess {
    return {
        type: constants.UPLOAD_DOCUMENT_SUCCESS,
        payload: response
    };
}

export interface IUploadDocumentFail {
    type: constants.UPLOAD_DOCUMENT_FAIL,
    payload: IResponse
}

export function uploadDocumentFail(response:IResponse):IUploadDocumentFail {
    return {
        type: constants.UPLOAD_DOCUMENT_FAIL,
        payload: response
    };
}

export interface IDeleteDocument {
    type: constants.DELETE_DOCUMENT,
    payload: number
}

export function deleteDocument(id:number):IDeleteDocument {
    return {
        type: constants.DELETE_DOCUMENT,
        payload: id
    };
}

export interface IDeleteDocumentSuccess {
    type: constants.DELETE_DOCUMENT_SUCCESS,
    payload: IResponse
}

export function deleteDocumentSuccess(response:IResponse):IDeleteDocumentSuccess {
    return {
        type: constants.DELETE_DOCUMENT_SUCCESS,
        payload: response
    };
}

export interface IDeleteDocumentFail {
    type: constants.DELETE_DOCUMENT_FAIL,
    payload: IResponse
}

export function deleteDocumentFail(response:IResponse):IDeleteDocumentFail {
    return {
        type: constants.DELETE_DOCUMENT_FAIL,
        payload: response
    };
}

export interface IResetState {
    type: constants.CLEAR_STATE
}

export function resetState():IResetState {
    return { 
        type: constants.CLEAR_STATE
    };
}
import * as constants from '../constants';
import { IDocument } from '../types';


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
    payload: IDocument
}

export function uploadDocumentSuccess(document:IDocument):IUploadDocumentSuccess {
    return {
        type: constants.UPLOAD_DOCUMENT_SUCCESS,
        payload: document
    };
}

export interface IUploadDocumentFail {
    type: constants.UPLOAD_DOCUMENT_FAIL,
    payload: string
}

export function uploadDocumentFail(errMessage:string):IUploadDocumentFail {
    return {
        type: constants.UPLOAD_DOCUMENT_FAIL,
        payload: errMessage
    };
}

export interface IDeleteDocument {
    type: constants.DELETE_DOCUMENTS,
    payload: number
}

export function deleteDocument(id:number):IDeleteDocument {
    return {
        type: constants.DELETE_DOCUMENTS,
        payload: id
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
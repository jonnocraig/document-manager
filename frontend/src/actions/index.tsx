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
    payload: IDocument[]
}

export function updateDocuments(docs:IDocument[]):IUpdateDocuments {
    return {
        type: constants.UPDATE_DOCUMENTS,
        payload: docs
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
import { IWgtvList, IWgtvSearchArgs } from './wgtv.service';
import { Action } from '@ngrx/store';
import { IHttpReponse } from '../core/http/http.service';

export const WGTV_LIST_GET = '[WGTV] Get list';
export const WGTV_LIST_FETCH = '[WGTV] Fetch list';

export class GetList implements Action {
    readonly type = WGTV_LIST_GET;

    constructor(public payload: IWgtvSearchArgs) {
    }
}

export class FetchList implements Action {
    readonly type = WGTV_LIST_FETCH;

    constructor(public payload: IHttpReponse<IWgtvList[]>) {
    }
}

export type Actions = GetList | FetchList;

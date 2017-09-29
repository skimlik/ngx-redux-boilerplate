import { Action } from '@ngrx/store';
import { IWgtvTags } from './wgtv-tags.service';

export const WGTV_TAGS_GET = '[WGTV TAGS] Get tags';
export const WGTV_TAGS_FETCH = '[WGTV TAGS] Fetch tags';

export class GetTags implements Action {
    readonly type = WGTV_TAGS_GET;
}

export class FetchTags implements Action {
    readonly type = WGTV_TAGS_FETCH;

    constructor(public payload: IWgtvTags) {
    }
}

export type Actions = GetTags | FetchTags;

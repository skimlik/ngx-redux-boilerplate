import * as fromWgtvActions from './wgtv.actions';
import { IWgtvState } from './wgtv.state';
import { IWgtvList, IWgtvSearchArgs } from './wgtv.service';

export interface IWgtvListState {
    pages: number;
    pageNo: number;
    total: number;
    search: IWgtvSearchArgs;
    busy: boolean;
    list: IWgtvList[];
}

export const initialState: IWgtvListState = {
    pageNo: 1,
    pages: 1,
    total: 0,
    busy: false,
    list: [],
    search: {}
};

export function wgtvListReducer(state = initialState, action: fromWgtvActions.Actions): IWgtvListState {
    switch (action.type) {
        case fromWgtvActions.WGTV_LIST_GET:
            return {
                ...state,
                search: action.payload,
            };
        case fromWgtvActions.WGTV_LIST_FETCH:
            return {
                ...state,
                pageNo: action.payload.meta.page,
                pages: action.payload.meta.page_total,
                total: action.payload.meta.count,
                list: action.payload.data
            };
        default:
            return state;
    }
}

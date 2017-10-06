import { IWgtvList, IWgtvSearchArgs } from './wgtv.service';
import * as fromRoot from '../state';
import * as fromListReducers from './wgtv.reducers';
import * as fromTagsReducers from './wgtv-tags.reducers';

import { IWgtvListState } from './wgtv.reducers';
import { IWgtvTagsState } from './wgtv-tags.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface IWgtvState {
    list: IWgtvListState;
    tags: IWgtvTagsState;
}

export interface IState extends fromRoot.IState {
    wgtvList: IWgtvState;
}

export const reducers = {
    list: fromListReducers.wgtvListReducer,
    tags: fromTagsReducers.wgtvTagsReducer
};

export const selectWgtvState = createFeatureSelector('wgtvList');

export const getListState = createSelector(
    selectWgtvState,
    (state: IWgtvState) => state.list
);

export const getTagsState = createSelector(
    selectWgtvState,
    (state: IWgtvState) => state.tags
);

export const getProjectsState = createSelector(
        getTagsState,
        fromTagsReducers.getProjects
);

export const getCategoriesState = createSelector(
    getTagsState,
    fromTagsReducers.getCategories
);

export const getProgramsState = createSelector(
    getTagsState,
    fromTagsReducers.getPrograms
);

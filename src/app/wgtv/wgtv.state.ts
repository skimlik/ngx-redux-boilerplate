import { IWgtvList, IWgtvSearchArgs } from './wgtv.service';
import * as fromRoot from '../state';
import * as fromListReducers from './wgtv.reducers';
import * as fromTagsReducers from './wgtv-tags.reducers';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWgtvListState } from './wgtv.reducers';
import { IWgtvTagsState } from './wgtv-tags.reducers';

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
export const getTagState = createFeatureSelector('tags');

export const getList = createSelector(
    selectWgtvState,
    (state: IWgtvState) => state.list
);

export const getProjects = createSelector(
    selectWgtvState,
    (state: IWgtvState) => state.tags.projects
);

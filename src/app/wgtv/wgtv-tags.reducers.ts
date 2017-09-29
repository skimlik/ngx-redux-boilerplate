import * as tagsActions from './wgtv-tags.actions';
import { IWgtvCategories, IWgtvProjects, IWgtvPrograms } from './wgtv-tags.service';

export interface IWgtvTagsState {
    categories: IWgtvCategories[];
    programs: IWgtvPrograms[];
    projects: IWgtvProjects[];
}

export const tagsInitialState: IWgtvTagsState = {
    categories: [],
    programs: [],
    projects: []
};

export function wgtvTagsReducer(state = tagsInitialState, action: tagsActions.Actions): IWgtvTagsState {
    switch (action.type) {
        case tagsActions.WGTV_TAGS_GET:
            return state;
        case tagsActions.WGTV_TAGS_FETCH:
            return Object.assign({}, <IWgtvTagsState>{
                categories: action.payload.categories,
                programs: action.payload.programs,
                projects: action.payload.projects
            });
        default:
            return state;
    }
}

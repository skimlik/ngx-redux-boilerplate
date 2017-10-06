import { Component, OnDestroy, OnInit } from '@angular/core';
import { IState, getListState, getTagsState, getProjectsState, getCategoriesState, getProgramsState } from './wgtv.state';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { IWgtvListState } from './wgtv.reducers';
import { IWgtvTagsState } from './wgtv-tags.reducers';
import { IWgtvSearchArgs } from './wgtv.service';
import * as fromListActions from './wgtv.actions';
import * as fromTagsActions from './wgtv-tags.actions';
import { IWgtvProjects, IWgtvCategories, IWgtvPrograms } from './wgtv-tags.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'wgtv-list',
    templateUrl: 'wgtv-list.component.html',
    styleUrls: ['wgtv-list.component.scss']
})
export class WgtvListComponent implements OnInit, OnDestroy {
    public list$: Observable<IWgtvListState>;
    public projects$: Observable<IWgtvProjects[]>;
    public categories$: Observable<IWgtvCategories[]>;
    public programs$: Observable<IWgtvPrograms[]>;

    private stateSubscription: Subscription;
    private state: IWgtvListState;

    constructor(private store: Store<IState>) {
        this.list$ = this.store.select(getListState)
            .map(s => {
                this.state = s;
                return s;
            });
        this.projects$ = this.store.select(getProjectsState);
        this.categories$ = this.store.select(getCategoriesState);
        this.programs$ = this.store.select(getProgramsState);
    }

    public ngOnInit() {
        this.store.dispatch(new fromTagsActions.GetTags());
        this.getList();
    }

    public ngOnDestroy(): void {
        this.stateSubscription.unsubscribe();
    }

    public getList(): void {
        this.store.dispatch(new fromListActions.GetList({
            page_no: 1
        }));
    }

    public selectPage(pageNo: number): void {
        const query = Object.assign({}, this.state.search, { page_no: pageNo});
        this.store.dispatch(new fromListActions.GetList(query));
    }

    public selectProject({ project_id }: { project_id: number }): void {
        const query = Object.assign({}, this.state.search, { page_no: 1, project_id: project_id});
        this.store.dispatch(new fromListActions.GetList(query));
    }

    public selectCategory({ category_id }: { category_id: number }): void {
        const query = Object.assign({}, this.state.search, { page_no: 1, category_id: category_id});
        this.store.dispatch(new fromListActions.GetList(query));
    }

    public selectProgram({ program_id }: { program_id: number }): void {
        const query = Object.assign({}, this.state.search, { page_no: 1, program_id: program_id});
        this.store.dispatch(new fromListActions.GetList(query));
    }
}

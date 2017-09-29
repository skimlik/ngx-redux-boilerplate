import { Component, OnDestroy, OnInit } from '@angular/core';
import { IState, getList, getProjects } from './wgtv.state';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { IWgtvListState } from './wgtv.reducers';
import { IWgtvTagsState } from './wgtv-tags.reducers';
import { IWgtvSearchArgs } from './wgtv.service';
import * as fromListActions from './wgtv.actions';
import * as fromTagsActions from './wgtv-tags.actions';
import { IWgtvProjects } from './wgtv-tags.service';

@Component({
    selector: 'wgtv-list',
    templateUrl: 'wgtv-list.component.html'
})
export class WgtvListComponent implements OnInit {
    public list$: Observable<IWgtvListState>;
    public projects$: Observable<IWgtvProjects[]>;

    constructor(private store: Store<IState>) {
        this.list$ = this.store.select(getList);
        this.projects$ = this.store.select(getProjects);
    }

    public ngOnInit() {
        this.store.dispatch(new fromTagsActions.GetTags());
        this.getList();
    }

    public getList(): void {
        this.store.dispatch(new fromListActions.GetList({
            page_no: 1
        }));
    }

    public selectPage(pageNo: number): void {
        this.store.dispatch(new fromListActions.GetList({
            page_no: pageNo
        }));
    }
}

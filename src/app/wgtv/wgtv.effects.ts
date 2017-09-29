import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as fromListActions from './wgtv.actions';
import { IWgtvSearchArgs, WgtvService } from './wgtv.service';

@Injectable()
export class WgtvEffects {

    constructor(private actions: Actions, private service: WgtvService) {
    }

    @Effect()
    fetchList$ = this.actions.ofType(fromListActions.WGTV_LIST_GET)
        .map((m: fromListActions.GetList) => m.payload)
        .exhaustMap((search: IWgtvSearchArgs) => this.service.list(search)
            .map(m => new fromListActions.FetchList(m)));

}

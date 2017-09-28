import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { GameInfoService } from './game-info.service';
import * as fromActions from './game-info.actions';

import 'rxjs/add/operator/exhaustMap';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GameInfoEffects {

    constructor(private actions$: Actions, private infoService: GameInfoService) {
    }

    @Effect()
    getInfo$ = this.actions$.ofType(fromActions.GET)
      .exhaustMap(() =>
          this.infoService.getInfo().map(info => {
            if (info.status === 'ok') {
                return new fromActions.FetchInfo(info.data);
            } else {
                Observable.throw(info.error);
            }
          }).catch(error => of(new fromActions.FetchError(error)))
      );
}

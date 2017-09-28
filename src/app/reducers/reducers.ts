import { ActionReducer, ActionReducerMap, MetaReducer, State } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { IState } from '../state';
import * as fromGameInfo from '../common/game-info';

export const reducers: ActionReducerMap<IState> = {
    gameInfo: fromGameInfo.gameInfoReducer
};

export function logger(reducer: ActionReducer<IState>): ActionReducer<IState> {
    return function (state: IState, action: any): IState {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<IState>[] = !environment.production
    ? [logger, storeFreeze]
    : [];

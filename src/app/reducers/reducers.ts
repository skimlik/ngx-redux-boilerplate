import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { IState } from '../state';
import * as fromTest from '../common/test';
import { createFeatureSelector, createSelector } from './selector';

export const reducers: ActionReducerMap<IState> = {
    test: fromTest.testReducer
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

export const getTestState = createFeatureSelector<fromTest.ITestState>('test');

export const getTestCounterValue = createSelector(
    getTestState,
    fromTest.getCounter
);

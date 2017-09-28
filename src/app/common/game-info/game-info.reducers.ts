import { IGameInfo } from './models';
import * as fromActions from './game-info.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: IGameInfo = {
    game_version: 'unknown',
    achievement_sections: null,
    languages: {
      'ru': 'Русский'
    },
    tanks_updated_at: 0,
    vehicle_crew_roles: null,
    vehicle_nations: null,
    vehicle_types: null
};

export function gameInfoReducer(state = initialState, action: fromActions.Actions): IGameInfo {
    switch (action.type) {
        case fromActions.FETCH:
            return action.payload;
        case fromActions.FETCH_ERROR:
            return state;
        default:
            return state;
    }
}

export const getInfo = createFeatureSelector<IGameInfo>('gameInfo');

export const getVersion = createSelector(
    getInfo,
    (state: IGameInfo) => state.game_version
);

export const getLanguages = createSelector(
  getInfo,
  (state: IGameInfo) => state.languages
);

export const getNations = createSelector(
  getInfo,
  (state: IGameInfo) => state.vehicle_nations
);

export const getTanksUpdated = createSelector(
  getInfo,
  (state: IGameInfo) => new Date(state.tanks_updated_at * 1000)
);

import { Action } from '@ngrx/store';
import { IGameInfo } from './models/game-info';

export const FETCH = '[GAME_INFO] Fetch game info';
export const FETCH_ERROR = '[GAME_INFO] Fetch error';
export const GET = '[GAME_INFO] Get game info';

export class GetInfo implements Action {
    readonly type = GET;
}

export class FetchInfo implements Action {
  readonly type = FETCH;

  constructor(public payload: IGameInfo) {
  }
}

export class FetchError implements  Action {
    readonly type = FETCH_ERROR;

    constructor(public payload: any) {
    }
}

export type Actions = GetInfo | FetchInfo | FetchError;

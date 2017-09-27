import { Action } from '@ngrx/store';

export class Actions {
    public static INCREMENT: Action = {
        type: 'INCREMENT_OPERATION'
    };

    public static DECREMENT: Action = {
        type: 'DECREMENT_OPERATION'
    };
}

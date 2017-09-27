import { Action } from '@ngrx/store';

export const TEST_INCREMENT = '[TEST] Increment an operation';
export const TEST_DECREMENT = '[TEST] Decrement an operation';

export class IncrementCounter implements Action {
    readonly type = TEST_INCREMENT;
}

export class DecrementCounter implements Action {
    readonly type = TEST_DECREMENT;
}

export type Actions = IncrementCounter | DecrementCounter;

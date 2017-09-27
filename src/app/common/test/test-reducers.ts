import { ActionReducer, Action, State } from '@ngrx/store';
import * as testActions from './test-actions';

export interface ITestState {
    counter: number;
}


const initialTestState: ITestState = {
    counter: 10
};

export function testReducer(state = initialTestState, action: testActions.Actions): ITestState {
    switch (action.type) {
        case testActions.TEST_INCREMENT:
            return Object.assign({}, {
                counter: state.counter + 1
            });
        case testActions.TEST_DECREMENT:
        return Object.assign({}, {
            counter: state.counter - 1
        });
        default:
            return state;
    }
}

export const getCounter = (state: ITestState) => state.counter;

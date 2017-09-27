import { State } from '@ngrx/store';
import * as fromTest from './common/test';

export interface IState {
    test: fromTest.ITestState;
}

import { Selector } from '@ngrx/store';

export type AnyFn = (...args: any[]) => any;

export interface MemoizedSelector<State, Result>
    extends Selector<State, Result> {
    projector: AnyFn;
    release(): void;
}

export function memoize(t: AnyFn): { memoized: AnyFn; reset: () => void } {
    let lastArguments: null | IArguments = null;
    let lastResult: any = null;

    function reset() {
        lastArguments = null;
        lastResult = null;
    }

    function memoized(): any {
        if (!lastArguments) {
            lastResult = t.apply(null, arguments);
            lastArguments = arguments;

            return lastResult;
        }
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] !== lastArguments[i]) {
                lastResult = t.apply(null, arguments);
                lastArguments = arguments;

                return lastResult;
            }
        }

        return lastResult;
    }

    return { memoized, reset };
}

export function createFeatureSelector<T>(
    featureName: string
): MemoizedSelector<object, T> {
    const { memoized, reset } = memoize(function (state: any): any {
        return state[featureName];
    });

    return Object.assign(memoized, { release: reset, projector: memoized });
}

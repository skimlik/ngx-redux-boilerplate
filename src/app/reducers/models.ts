export interface Action {
    type: string;
}

export type TypeId<T> = () => T;

export type InitialState<T> = Partial<T> | TypeId<Partial<T>> | void;

type ActionReducer<T, V extends Action = Action> = (state: T | undefined, action: V) => T;

export type ActionReducerMap<T, V extends Action = Action> = {
    [p in keyof T]: ActionReducer<T[p], V>
};

type ActionReducerFactory<T, V extends Action = Action> = (reducerMap: ActionReducerMap<T, V>, initialState?: InitialState<T>) =>
    ActionReducer<T, V>;

export type MetaReducer<T, V extends Action = Action> = (
    reducer: ActionReducer<T, V>
) => ActionReducer<T, V>;

export interface StoreFeature<T, V extends Action = Action> {
    key: string;
    reducers: ActionReducerMap<T, V> | ActionReducer<T, V>;
    reducerFactory: ActionReducerFactory<T, V>;
    initialState?: InitialState<T>;
    metaReducers?: MetaReducer<T, V>[];
}

export type Selector<T, V> = (state: T) => V;
import { Action } from "../types";
import { Coin } from "./model";

export interface MainState {
    loading: boolean;
    error: Error | null;
    data: Coin[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const reducer = (
    state: MainState = initialState,
    action: Action,
): MainState => {
    const { type, payload } = action;

    switch (type) {
        case "FETCH_COINS_REQUESTED":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_COINS_SUCCEEDED":
            return {
                ...state,
                loading: false,
                error: null,
                data: payload,
            };
        case "FETCH_COINS_FAILED":
            return {
                loading: false,
                error: payload,
                data: [],
            };
        default:
            return state;
    }
};

export default reducer;

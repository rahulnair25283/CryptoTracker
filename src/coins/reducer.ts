import { Action, Coin } from "../types";
import { REMOVE_FROM_WATCHLIST } from "../watchList/actions";
import {
    FETCH_COINS_REQUESTED,
    FETCH_COINS_SUCCEEDED,
    FETCH_COINS_FAILED,
} from "./actions";

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
        case FETCH_COINS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COINS_SUCCEEDED:
            return {
                loading: false,
                error: null,
                data:
                    state.data.length === 0
                        ? payload
                        : state.data.map((x: Coin, i: number) => ({
                            ...payload[i],
                            favorite: x.favorite,
                        })),
            };
        case FETCH_COINS_FAILED:
            return {
                loading: false,
                error: payload,
                data: [],
            };
        case REMOVE_FROM_WATCHLIST: {
            return {
                ...state,
                data: state.data.map(x => {
                    x.favorite = x.id === payload.id ? false : x.favorite;
                    return x;
                }),
            };
        }
        default:
            return state;
    }
};

export default reducer;

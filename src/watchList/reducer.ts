import { Action, Coin } from "../types";
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from "./actions";

export interface WatchlistState {
    data: Coin[];
}

const initialState = {
    data: [],
};

const reducer = (
    state: WatchlistState = initialState,
    action: Action,
): WatchlistState => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_WATCHLIST:
            return {
                data: [...state.data, payload],
            };
        case REMOVE_FROM_WATCHLIST:
            return {
                data: state.data.filter(x => x.id !== payload.id),
            };
        default:
            return state;
    }
};

export default reducer;

import { Action, Coin } from "../types";

export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";

export const addToWatchlist = (coin: Coin): Action => ({
    type: ADD_TO_WATCHLIST,
    payload: coin,
});

export const removeFromWatchlist = (coin: Coin): Action => ({
    type: REMOVE_FROM_WATCHLIST,
    payload: coin,
});

import { Action, Coin } from "../types";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavorites = (coin: Coin): Action => ({
    type: ADD_TO_FAVORITES,
    payload: coin,
});

export const removeFromFavorites = (coin: Coin): Action => ({
    type: REMOVE_FROM_FAVORITES,
    payload: coin,
});

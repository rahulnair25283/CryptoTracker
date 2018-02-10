import { Action, Coin } from "../types";

export const SEARCH_COIN = "SEARCH_COIN";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const searchCoin = (searchText: string, allCoins: Coin[]): Action => ({
    type: SEARCH_COIN,
    payload: { searchText, allCoins },
});

export const clearSearch = (): Action => ({
    type: CLEAR_SEARCH,
});

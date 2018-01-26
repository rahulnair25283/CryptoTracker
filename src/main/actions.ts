import { Action } from "../types";
import { Coin } from "./model";

export const FETCH_COINS = "FETCH_COINS";
export const FETCH_COINS_REQUESTED = "FETCH_COINS_REQUESTED";
export const FETCH_COINS_SUCCEEDED = "FETCH_COINS_SUCCEEDED";
export const FETCH_COINS_FAILED = "FETCH_COINS_FAILED";

export const fetchCoins = (): Action => ({
    type: FETCH_COINS,
});

export const fetchCoinsRequested = (): Action => ({
    type: FETCH_COINS_REQUESTED,
});

export const fetchCoinsSucceeded = (payload: Coin[]) => ({
    type: FETCH_COINS_SUCCEEDED,
    payload,
});

export const fetchCoinsFailed = (error: Error) => ({
    type: FETCH_COINS_FAILED,
    payload: error,
});

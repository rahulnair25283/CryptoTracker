import { combineReducers } from "redux";
import main, { MainState } from "./coins/reducer";
import watchlist, { WatchlistState } from "./watchList/reducer";
import { Coin } from "./types";

export interface RootState {
    main: MainState;
    watchlist: WatchlistState;
}

const root = combineReducers({ main, watchlist });

export const getMainState = (rootState: RootState): MainState => rootState.main;
export const getAllCoins = (rootState: RootState): Coin[] =>
    rootState.main.data;
export const getWatchlist = (rootState: RootState): Coin[] =>
    rootState.watchlist.data;

export default root;

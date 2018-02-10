import { combineReducers } from "redux";
import main, { MainState } from "./coinList/reducer";
import search, { SearchState } from "./search/reducer";
import favorites, { FavoritesState } from "./favorites/reducer";
import { Coin } from "./types";

export interface RootState {
    main: MainState;
    search: SearchState;
    favorites: FavoritesState;
}

const root = combineReducers({ main, search, favorites });

export const getMainState = (rootState: RootState): MainState => rootState.main;
export const getAllCoins = (rootState: RootState): Coin[] =>
    rootState.main.data;
export const getSearchResult = (rootState: RootState): Coin[] =>
    rootState.search.searchResult;
export const getFavorites = (rootState: RootState): Coin[] =>
    rootState.favorites.data;

export default root;

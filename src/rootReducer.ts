import { combineReducers } from "redux";
import main, { MainState } from "./main/reducer";
import search, { SearchState } from "./search/reducer";
import { Coin } from "./main/model";

export interface RootState {
    main: MainState;
    search: SearchState;
}

const root = combineReducers({ main, search });

export const getMainState = (rootState: RootState): MainState => rootState.main;
export const getAllCoins = (rootState: RootState): Coin[] =>
    rootState.main.data;
export const getSearchResult = (rootState: RootState): Coin[] =>
    rootState.search.searchResult;

export default root;

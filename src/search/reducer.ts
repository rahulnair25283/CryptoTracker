import { Action } from "../types";
import { SEARCH_COIN, CLEAR_SEARCH } from "./actions";
import { Coin } from "../main/model";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../favorites/actions";

export interface SearchState {
    searchResult: Coin[];
}

const initialState: SearchState = {
    searchResult: [],
};

const reducer = (state: SearchState = initialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case SEARCH_COIN:
            const { searchText, allCoins } = payload;
            return {
                searchResult: allCoins.filter(
                    x =>
                        x.name
                            .toLowerCase()
                            .startsWith(searchText.toLowerCase()) ||
                        x.symbol
                            .toLowerCase()
                            .startsWith(searchText.toLowerCase()),
                ),
            };
        case CLEAR_SEARCH:
            return {
                searchResult: [],
            };
        case ADD_TO_FAVORITES:
            return {
                searchResult: state.searchResult.map(x => {
                    x.favorite = x.id === payload.id ? true : x.favorite;
                    return x;
                }),
            };
        case REMOVE_FROM_FAVORITES: {
            return {
                searchResult: state.searchResult.map(x => {
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
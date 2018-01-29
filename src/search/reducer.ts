import { Action } from "../types";
import { SEARCH_COIN, CLEAR_SEARCH } from "./actions";
import { Coin } from "../main/model";

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
        default:
            return state;
    }
};

export default reducer;

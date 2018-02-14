import { Action, Coin } from "../types";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../watchList/actions";

export interface SearchState {
    searchResult: Coin[];
}

const initialState: SearchState = {
    searchResult: [],
};

const reducer = (state: SearchState = initialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
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

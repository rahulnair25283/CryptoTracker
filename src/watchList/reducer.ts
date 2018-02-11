import { Action, Coin } from "../types";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actions";

export interface FavoritesState {
    data: Coin[];
}

const initialState = {
    data: [],
};

const reducer = (
    state: FavoritesState = initialState,
    action: Action,
): FavoritesState => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_FAVORITES:
            return {
                data: [...state.data, payload],
            };
        case REMOVE_FROM_FAVORITES:
            return {
                data: state.data.filter(x => x.id !== payload.id),
            };
        default:
            return state;
    }
};

export default reducer;

import { Action } from "../types";
import { Crypto } from "./model";

export interface State {
  loading: boolean;
  error: Error | null;
  data: Array<Crypto>;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: State = initialState, action: Action): any => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_COINS_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COINS_SUCCEEDED":
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };
    case "FETCH_COINS_FAILED":
      return {
        loading: false,
        error: new Error(),
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;

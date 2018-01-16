import { Action } from "../types";
import { Crypto } from "./model";

export interface State {
  loading: boolean;
  error: Error;
  data: Array<Crypto>;
}

const reducer = (state: State, action: Action): any => {
  const { type } = action;

  switch (type) {
    case "LOAD_CRYPTOS_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_CRYPTOS_SUCCEEDED":
      return {
        ...state,
        loading: false,
        error: null,
        // TODO: data:
      };
    case "LOAD_CRYPTOS_FAILED":
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

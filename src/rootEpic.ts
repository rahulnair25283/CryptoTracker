import fetchCoinsEpic from "./coinList/epic";
import { combineEpics } from "redux-observable";

const root = combineEpics(fetchCoinsEpic);

export default root;

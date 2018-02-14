import fetchCoinsEpic from "./coins/epic";
import { combineEpics } from "redux-observable";

const root = combineEpics(fetchCoinsEpic);

export default root;

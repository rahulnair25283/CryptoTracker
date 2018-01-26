import fetchCoinsEpic from "./main/epic";
import { combineEpics } from "redux-observable";

const root = combineEpics(fetchCoinsEpic);

export default root;

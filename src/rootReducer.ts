import { combineReducers } from "redux";
import main, { MainState } from "./main/reducer";

export interface RootState {
    main: MainState;
}

const root = combineReducers({ main });

export const getMainState = (rootState: RootState): MainState => rootState.main;

export default root;

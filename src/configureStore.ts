import Config from "react-native-config";
import logger from "redux-logger";
import {
  Middleware,
  Store,
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import fetchCoinsEpic from "./main/epic";
import mainReducer from "./main/reducer";

const rootEpic = combineEpics(fetchCoinsEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

const rootReducer = combineReducers({ mainReducer });

const configureStore = (): Store<any> => {
  const middlewares: Middleware[] = [];
  middlewares.push(epicMiddleware);

  if (Config.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
};

export default configureStore;

import logger from "redux-logger";
import { Middleware, Store, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = (): Store<any> => {
    const middlewares: Middleware[] = [];
    middlewares.push(epicMiddleware);
    middlewares.push(logger);

    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    return store;
};

export default configureStore;

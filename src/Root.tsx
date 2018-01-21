import React, { Component } from "react";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import App from "./App";

interface Props {}
interface State {}

const store = configureStore();

class Root extends Component<Props, State> {
  public render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;

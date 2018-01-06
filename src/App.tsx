import React, { Component } from "react";

export interface Props {}
export interface State {}

import Main from "./screens/Main";

export default class App extends Component<Props, State> {
  public render() {
    return <Main />;
  }
}

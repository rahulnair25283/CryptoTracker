import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export interface Props {}
export interface State {}

import { Provider } from "react-redux";
import Main from "./screens/Main";

export default class App extends Component<Props, State> {
  public render() {
    return <Main />;
  }
}

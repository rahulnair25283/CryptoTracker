import React, { Component } from "react";
import CryptoList from "../components/CryptoList";

export interface State {}
export interface Props {}

export default class Main extends Component<Props, State> {
  public render() {
    return <CryptoList />;
  }
}

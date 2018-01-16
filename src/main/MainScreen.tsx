import React, { Component } from "react";
import CryptoList from "./component/CryptoList";

export interface State {}
export interface Props {
  navigation: any;
}

export default class MainScreen extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return <CryptoList navigateToSearch={this.navigateToSearch}/>;
  }

  public navigateToSearch = () => {
    this.props.navigation.navigate("Search");
  }
}

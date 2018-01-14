import React, { Component } from "react";
import Search from "../components/search/Search";

export interface State {}
export interface Props {
  navigation: any;
}

export default class SearchScreen extends Component<Props, State> {
  public render() {
    return <Search navigateBack={this.navigateBack}/>;
  }

  public navigateBack = () => {
    this.props.navigation.goBack();
  }
}

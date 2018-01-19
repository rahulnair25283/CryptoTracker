import React, { Component } from "react";
import Search from "./component/Search";
import { View } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import styles from "./styles";

export interface State {}
export interface Props {
  navigation: any;
}

export default class SearchScreen extends Component<Props, State> {
  public render() {
    return (
      <View>
        <StatusBar style={styles.statusBarBackground} />
        <Search navigateBack={this.navigateBack} />
      </View>
    );
  }

  public navigateBack = () => {
    this.props.navigation.goBack();
  };
}

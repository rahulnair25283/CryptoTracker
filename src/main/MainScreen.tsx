import React, { Component } from "react";
import CryptoList from "./component/CryptoList";
import { View } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import styles from "./styles";

export interface State {}
export interface Props {
  navigation: any;
}

export default class MainScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <View>
        <StatusBar style={styles.statusBarBackground} />
        <CryptoList navigateToSearch={this.navigateToSearch} />
      </View>
    );
  }

  public navigateToSearch = () => {
    this.props.navigation.navigate("Search");
  };
}

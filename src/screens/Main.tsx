import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { Crypto } from "../model";

export interface State {
  loading: boolean;
  data: Array<Crypto>;
}
export interface Props {}

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  public componentDidMount() {
    return fetch("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => response.json())
      .then(responseJson =>
        this.setState({
          loading: false,
          data: responseJson,
        })
      )
      .catch(err => console.log(err));
  }

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
  private keyExtractor = (item, index) => item.id;
}

import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Crypto } from "../model";
import CryptoItem from "./CryptoItem";

interface Props {}
interface State {
  loading: boolean;
  data: Crypto[];
}

export default class CryptoList extends Component<Props, State> {
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
      <FlatList
        data={this.state.data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }

  private renderItem = ({ item }) => <CryptoItem data={item} />;
  private keyExtractor = (item, index) => item.id;
}

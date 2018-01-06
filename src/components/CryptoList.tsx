import React, { Component } from "react";
import TimerMixin from "react-timer-mixin";
import { FlatList, Text, View } from "react-native";
import { Crypto } from "../model";
import CryptoItem from "./CryptoItem";
import styles from "./styles";

interface Props {}
interface State {
  loading: boolean;
  data: Crypto[];
}

export default class CryptoList extends Component<Props, State> {
  private timer;
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  public componentDidMount() {
    this.timer = TimerMixin.setInterval(() => {
      return fetch("https://api.coinmarketcap.com/v1/ticker/")
        .then(response => response.json())
        .then(responseJson =>
          this.setState({
            loading: false,
            data: responseJson,
          })
        )
        .catch(err => console.log(err));
    }, 1000);
  }

  public componentWillUnmount() {
    TimerMixin.clearInterval(this.timer);
  }

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }

  private renderItem = ({ item }) => <CryptoItem data={item} />;

  private keyExtractor = item => item.id;

  private renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Cryptocurrencies</Text>
    </View>
  );

  private renderSeparator = () => <View style={styles.separator} />;
}

import React, { Component } from "react";
import TimerMixin from "react-timer-mixin";
import {
  FlatList,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Crypto } from "../model";
import CryptoItem from "./CryptoItem";
import styles from "../styles";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  navigateToSearch: () => void;
}

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
      return this.refreshContent();
    }, 1000);
  }

  public componentWillUnmount() {
    TimerMixin.clearInterval(this.timer);
  }

  public render() {
    return (
      <View>
        {this.renderHeader()}
        <FlatList
          data={this.state.data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.loading}
              onRefresh={this.onRefresh}
              tintColor="#fc5130"
            />
          }
        />
      </View>
    );
  }

  private renderItem = ({ item }) => <CryptoItem data={item} />;

  private keyExtractor = item => item.id;

  private renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Cryptocurrencies</Text>
      </View>
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity onPress={this.props.navigateToSearch}>
          <Icon name="search" color="#ffffff" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );

  private onRefresh = () => {
    this.setState({
      loading: true,
    });
    this.refreshContent();
    this.setState({
      loading: false,
    });
  };

  private refreshContent = () =>
    fetch("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => response.json())
      .then(responseJson =>
        this.setState({
          loading: false,
          data: responseJson,
        }),
      )
      .catch(err => console.log(err));
}

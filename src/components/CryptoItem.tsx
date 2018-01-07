import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Crypto } from "../model";
import styles from "./styles";
import Icons from "../icons";

interface Props {
  data: Crypto;
}
interface State {}

export default class CryptoItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { data } = this.props;
    return (
      <View style={styles.item}>
        <View style={styles.itemSummary}>
          <View style={styles.icon}>
            <Image source={Icons[data.symbol]} style={styles.iconImage}/>
          </View>
          <View style={styles.nameSymbol}>
            <Text style={styles.symbol}>{data.symbol}</Text>
            <Text style={styles.name}> | {data.name}</Text>
          </View>
          <Text style={styles.price}>$ {data.price_usd}</Text>
        </View>
        <View style={styles.itemDetails}>
          <View style={styles.hourlyChange}>
            <Text style={styles.changeLabel}>Hourly: </Text>
            {Number.parseFloat(data.percent_change_1h) > 0 ? (
              <Text style={styles.changePositive}>
                {data.percent_change_1h}%
              </Text>
            ) : (
              <Text style={styles.changeNegative}>
                {data.percent_change_1h}%
              </Text>
            )}
          </View>
          <View style={styles.hourlyChange}>
            <Text style={styles.changeLabel}>Daily: </Text>
            {Number.parseFloat(data.percent_change_24h) > 0 ? (
              <Text style={styles.changePositive}>
                {data.percent_change_24h}%
              </Text>
            ) : (
              <Text style={styles.changeNegative}>
                {data.percent_change_24h}%
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

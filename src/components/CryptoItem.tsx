import React, { Component } from "react";
import { Text } from "react-native";
import { Crypto } from "../model";

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
    return <Text>{data.name}</Text>;
  }
}

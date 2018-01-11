import React, { Component } from "react";
import { View, Text } from "react-native";

export interface State {}
export interface Props {}

export default class Search extends Component<Props, State> {
  public render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

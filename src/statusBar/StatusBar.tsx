import React from "react";
import { View, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

interface Props {
  style: object;
}

const StatusBar = (props: Props) => (
  <View style={[styles.statusBar, props.style || {}]} />
);

const styles = ScaledSheet.create({
  statusBar: {
    height: Platform.OS === "ios" ? "20@ms" : 0,
    backgroundColor: "#FFFFFF",
  },
});

export default StatusBar;

import React from "react";
import { View, StyleSheet, Platform } from "react-native";

interface Props {
  style: object;
}

const StatusBar = (props: Props) => (
  <View style={[styles.statusBar, props.style || {}]} />
);

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#FFFFFF",
  },
});

export default StatusBar;

import React from "react";
import { View, Platform, StatusBar } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

interface Props {
  style?: object;
}

const AppStatusBar = (props: Props) => {
  const platform = Platform.OS;
  return platform === "ios"
    ? <View style={[styles.statusBar, props.style || {}]} />
    : <StatusBar backgroundColor="#2aa2cc" />
};

const styles = ScaledSheet.create({
  statusBar: {
    height: "20@ms",
    backgroundColor: "#2aa2cc",
  },
});

export default AppStatusBar;

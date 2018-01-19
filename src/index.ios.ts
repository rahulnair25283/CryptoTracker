// This file only exists as a workaround for building & deploying on VS App Center.
// App Center looks for an index.ios.js file as the starting point.

import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("CryptoTracker", () => App);
import { AppRegistry } from "react-native";
import Root from "./dist/Root";

console.ignoredYellowBox = ["Remote debugger"];
AppRegistry.registerComponent("CryptoTracker", () => Root);

import { StackNavigator } from "react-navigation";

export interface Props {}
export interface State {}

import MainScreen from "./main/MainScreen";
import SearchScreen from "./search/SearchScreen";

const App = StackNavigator(
  {
    Main: { screen: MainScreen },
    Search: { screen: SearchScreen },
  },
  {
    headerMode: "none",
  },
);

export default App;

import { StackNavigator } from "react-navigation";

export interface Props { }
export interface State { }

import WatchListScreen from "./watchList/WatchListScreen";
import SearchScreen from "./search/SearchScreen";

const App = StackNavigator(
    {
        WatchList: { screen: WatchListScreen },
        Search: { screen: SearchScreen },
    },
    {
        mode: "modal",
        headerMode: "none",
    },
);

export default App;

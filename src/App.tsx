import { StackNavigator } from "react-navigation";

export interface Props { }
export interface State { }

import WatchListScreen from "./watchList/WatchListScreen";
import SearchScreen from "./search/SearchScreen";
import CoinDetailsScreen from "./coinDetails/coinDetailsScreen";

const App = StackNavigator(
    {
        WatchList: { screen: WatchListScreen },
        Search: { screen: SearchScreen },
        CoinDetails: { screen: CoinDetailsScreen }
    },
    {
        mode: "modal",
        headerMode: "none",
    },
);

export default App;

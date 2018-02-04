import { StackNavigator } from "react-navigation";

export interface Props {}
export interface State {}

import MainScreen from "./main/MainScreen";
import FavoritesScreen from "./favorites/FavoritesScreen";
import SearchScreen from "./search/SearchScreen";
import CoinDetailsScreen from "./coinDetails/coinDetailsScreen";

const App = StackNavigator(
    {
        Main: { screen: MainScreen },
        CoinDetails: { screen: CoinDetailsScreen },
        Favorites: { screen: FavoritesScreen },
        Search: { screen: SearchScreen },
    },
    {
        headerMode: "none",
    },
);

export default App;

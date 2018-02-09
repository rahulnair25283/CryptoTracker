import { TabNavigator } from "react-navigation";

export interface Props { }
export interface State { }

import MainScreen from "./main/MainScreen";
import FavoritesScreen from "./favorites/FavoritesScreen";
import SearchScreen from "./search/SearchScreen";

const NewMainScreen = TabNavigator(
    {
        Main: { screen: MainScreen },
        Favorites: { screen: FavoritesScreen },
        Search: { screen: SearchScreen },
    },
    {
    },
);

export default NewMainScreen;

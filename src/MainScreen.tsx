import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";

export interface Props { }
export interface State { }

import CoinListScreen from "./coinList/CoinListScreen";
import WatchListScreen from "./watchList/WatchListScreen";
import SearchScreen from "./search/SearchScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const MainScreen = TabNavigator(
    {
        All: {
            screen: CoinListScreen,
            navigationOptions: () => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Icon name="list" size={25} color={focused ? tintColor : "gray"} />
                }
            })
        },
        Favorites: {
            screen: WatchListScreen,
            navigationOptions: () => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Icon name="star-border" size={25} color={focused ? tintColor : "gray"} />
                }
            })
        },
        Search: {
            screen: SearchScreen, navigationOptions: () => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Icon name="search" size={25} color={focused ? tintColor : "gray"} />
                }
            })
        },
    },
    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: "#30bced",
            inactiveTintColor: "#e2e2e2",
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: "bottom",
        animationEnabled: true,
        // swipeEnabled: true,
    },
);

export default MainScreen;

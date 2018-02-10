import { StackNavigator } from "react-navigation";

export interface Props { }
export interface State { }

import MainScreen from "./MainScreen";
import CoinDetailsScreen from "./coinDetails/coinDetailsScreen";

const App = StackNavigator(
    {
        Main: { screen: MainScreen },
        CoinDetails: { screen: CoinDetailsScreen },
    },
    {
        mode: "modal",
        headerMode: "none",
    },
);

export default App;

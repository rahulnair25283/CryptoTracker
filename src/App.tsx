import { StackNavigator } from "react-navigation";

export interface Props { }
export interface State { }

import NewMainScreen from "./NewMainScreen";
import CoinDetailsScreen from "./coinDetails/coinDetailsScreen";

const App = StackNavigator(
    {
        NewMain: { screen: NewMainScreen },
        CoinDetails: { screen: CoinDetailsScreen },
    },
    {
        mode: "modal",
        headerMode: "none",
    },
);

export default App;

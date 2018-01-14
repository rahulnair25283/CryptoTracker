import { StackNavigator } from "react-navigation";

export interface Props {}
export interface State {}

import MainScreen from "./screens/MainScreen";
import SearchScreen from "./screens/SearchScreen";

// export default class App extends Component<Props, State> {
//   public render() {
//     return <Main />;
//   }
// }

const App = StackNavigator(
  {
    Main: { screen: MainScreen },
    Search: { screen: SearchScreen },
  },
  {
    headerMode: "none",
  }
);

export default App;

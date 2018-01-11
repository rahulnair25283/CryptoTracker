import { StackNavigator } from "react-navigation";

export interface Props {}
export interface State {}

import Main from "./screens/Main";
import Search from "./screens/Search";

// export default class App extends Component<Props, State> {
//   public render() {
//     return <Main />;
//   }
// }

const App = StackNavigator(
  {
    Main: { screen: Main },
    Search: { screen: Search },
  },
  {
    headerMode: "none",
  }
);

export default App;

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "./src/screens/StartScreen";
import SpeakingScreen from "./src/screens/SpeakingScreen";
import FinishScreen from "./src/screens/FinishScreen";

const navigator = createStackNavigator(
  {
    Start: StartScreen,
    Speaking: SpeakingScreen,
    Finish: FinishScreen,
  },
  {
    initialRouteName: "Start",
    defaultNavigationOptions: {
      title: "오영완",
    },
  }
);

export default createAppContainer(navigator);

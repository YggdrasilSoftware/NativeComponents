import HomeScreenios from "./screens/HomeScreenios";
import SecondScreenios from "./screens/SeconScreenios";
import ThirdScreenios from "./screens/ThirdScreenios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type Props = {};
type State = {
  status: Boolean
}

const Stack = createNativeStackNavigator();

export default function App2() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Homeios"
          component={HomeScreenios}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Secondios"
          component={SecondScreenios}
        />
        <Stack.Screen 
          name="Thirdios"
          component={ThirdScreenios}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
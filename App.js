import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./src/screens/Menu";
import Login from "./src/screens/Login";
import { useStore } from "./src/store/store";

const Stack = createNativeStackNavigator();

export default function App() {
  const {  authenticated } = useStore();
  return (
    <NavigationContainer>
    <Stack.Navigator
     initialRouteName={ authenticated ? "Menu" : "Login"}
     screenOptions={{ headerShown: false }}
   >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={ Menu } />
   </Stack.Navigator>
  </NavigationContainer>
  );
}


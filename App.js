import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./src/screens/Menu";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  const autheticated = true;
  return (
    <NavigationContainer>
    <Stack.Navigator
     initialRouteName={autheticated ? "Menu" : "Login"}
     screenOptions={{ headerShown: false }}
   >
     { autheticated ? 
      <Stack.Screen name="Menu" component={Menu} />:
      <Stack.Screen name="Login" component={Login} />}
   </Stack.Navigator>
  </NavigationContainer>
  );
}


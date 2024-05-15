import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./src/screens/Menu";
import Registration from "./src/screens/registration";
import Login from "./src/screens/Login";
import Tasks from "./src/screens/CategoryTasks";

const Stack = createNativeStackNavigator();
export default function Routes({ authenticated }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={authenticated ? "Menu" : "Login"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

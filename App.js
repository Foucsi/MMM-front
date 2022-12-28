import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MonteurScreen from "./screens/MonteurScreen";
import ClientScreen from "./screens/ClientScreen";
import LoginScreen from "./screens/LoginScreen";
import Welcome from "./screens/Welcome";
import SettingScreen from "./screens/SettingScreen";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import user from "./reducers/users";

const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer: { user },
});

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Monteur" component={MonteurScreen} />
          <Stack.Screen name="Client" component={ClientScreen} />
          <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

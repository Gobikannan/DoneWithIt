import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { Platform } from "react-native";
import MessagesScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import InputFormScreen from "./app/screens/InputFormScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AppImagePicker from "./app/components/AppImagePicker";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: 'red' }, headerTintColor: 'white' }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen}
          options={{
            title: 'Register'
          }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Input Form" component={InputFormScreen} />
        <Stack.Screen name="ImagePicker" component={AppImagePicker} options={({ route }) => title = route.id} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="View Image" component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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

export default function App() {
  return <MessagesScreen />;
}

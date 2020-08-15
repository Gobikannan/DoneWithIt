import React, { useState } from "react";
import Screen from "../components/Screen";
import { TextInput, Text, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";

function InputFormScreen(props) {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <Text style={{ height: 60 }}>{firstName}</Text>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  inputText: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 50,
  },
});

export default InputFormScreen;

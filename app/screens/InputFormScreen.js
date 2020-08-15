import React, { useState } from "react";
import Screen from "../components/Screen";
import { Text, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppSwitch from "../components/AppSwitch";
import AppPicker from "../components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function InputFormScreen(props) {
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState();
  return (
    <Screen>
      <Text style={{ height: 60 }}>{firstName}</Text>
      <AppPicker
        icon="apps"
        placeholder="Category"
        items={categories}
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item.label)}
      />
      <AppTextInput placeholder="Username" icon="email" />
      <AppSwitch />
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

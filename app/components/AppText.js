import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    fontWeight: "600",
  },
});

export default AppText;
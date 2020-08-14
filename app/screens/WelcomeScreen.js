import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("./../assets/logo.png")} style={styles.logo} />
        <AppText>Sell What You Don't need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login"></AppButton>
        <AppButton title="Register" color="secondary"></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;

import React from "react";
import Screen from "../components/Screen";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import AppFormSubmit from "../components/forms/AppFormSubmit";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress" // works for ios and it fetches from iOS keychain
        />
        <AppFormField
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          secureTextEntry
          textContentType="password" // works for ios and it fetches from iOS keychain
        />
        <AppFormSubmit title="LOGIN" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});

export default LoginScreen;

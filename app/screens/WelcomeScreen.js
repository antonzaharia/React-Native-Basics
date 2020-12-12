import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.button, styles.loginButton]}>
        <Text style={styles.textButton}>Login</Text>
      </View>
      <View style={[styles.button, styles.registerButton]}>
        <Text style={styles.textButton}>Register</Text>
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
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 100,
  },
  button: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    textShadowColor: colors.black,
    textShadowRadius: 20,
  },
});

export default WelcomeScreen;

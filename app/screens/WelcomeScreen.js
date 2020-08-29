import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => (
  <ImageBackground
    blurRadius={10}
    style={styles.background}
    source={require("../assets/background.jpg")}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
    </View>

    <View style={styles.buttonsContainer}>
      <AppButton
        title="login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <AppButton
        title="register"
        colour="secondary"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    //flexDirection: "column", # by default
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;

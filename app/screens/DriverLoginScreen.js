import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colours from "../config/colours";

const DriverLoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <AppButton
          title="login"
          colour="driverGreen"
          onPress={() => console.log("pressed.")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    //flexDirection: "column", # by default
    justifyContent: "center",
    alignItems: "center",
    top: 100,
  },
  inputBox: {
    height: 40,
    width: "50%",
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: colours.mediumGrey,
  },
});
export default DriverLoginScreen;

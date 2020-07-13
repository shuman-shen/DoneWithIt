import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colours from "../config/colours";

const AppButton = ({ title, onPress, colour = "primary" }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: colours[colour] }]}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.primary,
    width: "100%",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: colours.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;

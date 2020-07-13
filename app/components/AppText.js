import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colours from "../config/colours";

const AppText = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    color: colours.black,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});
export default AppText;

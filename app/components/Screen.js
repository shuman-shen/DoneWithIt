import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView } from "react-native";

function Screen(props) {
  return <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
export default Screen;

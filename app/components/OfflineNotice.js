import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colours from "../config/colours";
import AppText from "./AppText";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection.</AppText>
      </View>
    );
  }
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.primary,
    position: "absolute",
    height: 50,
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
  },
  text: {
    color: colours.white,
  },
});

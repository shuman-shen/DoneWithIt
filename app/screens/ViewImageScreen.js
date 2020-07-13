import React from "react";
import { Image, View, SafeAreaView, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import colours from "../config/colours";

const ViewImageScreen = () => (
  <View style={styles.container}>
    <Icons
      style={styles.closeIcon}
      name="close"
      size={35}
      color={colours.white}
    />
    <Icons
      style={styles.deleteIcon}
      name="trash-can-outline"
      size={35}
      color={colours.white}
    />

    <Image
      style={styles.image}
      resizeMode="contain"
      source={require("../assets/chair.jpg")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.black,
    flex: 1,
  },
  image: { width: "100%", height: "100%" },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
export default ViewImageScreen;

import React from "react";
import { StyleSheet, View } from "react-native";
import colours from "../config/colours";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      containerStyle={{ overflow: "visible" }}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Icons name="plus-circle" color={colours.white} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.primary,
    borderRadius: 30,
    borderColor: colours.white,
    borderWidth: 10,
    bottom: 12,
    width: 60,
    height: 60,
  },
});

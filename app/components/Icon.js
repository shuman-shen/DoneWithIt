import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import colours from "../config/colours";

function Icon({
  name,
  size = 40,
  backgroundColor = colours.primary,
  iconColor = colours.white,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Icon;

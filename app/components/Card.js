import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import colours from "../config/colours";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Card = ({ title, subtitle, imageUrl, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colours.white,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colours.secondary,
    fontWeight: "bold",
  },
});
export default Card;

import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colours from "../config/colours";

const ListItem = ({ image, title, subtitle }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={image} />
    <View>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colours.mediumGrey,
  },
});
export default ListItem;

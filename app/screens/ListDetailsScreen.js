import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colours from "../config/colours";
import ListItem from "../components/ListItem";

const ListDetailsScreen = ({ image, title, price, profile, name, count }) => (
  <View>
    <Image style={styles.image} source={image} />
    <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.price}>{price}</AppText>
    </View>
    <View style={styles.userContainer}>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subtitle="5 Listings"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colours.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListDetailsScreen;

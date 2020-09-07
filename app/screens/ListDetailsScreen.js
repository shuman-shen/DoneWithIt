import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colours from "../config/colours";

const ListDetailsScreen = ({ route }) => {
  const { imageUrl, title, price } = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{`$${price}`}</AppText>
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
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
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
    marginVertical: 20,
  },
});
export default ListDetailsScreen;

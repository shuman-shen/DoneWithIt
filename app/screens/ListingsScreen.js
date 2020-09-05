import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colours from "../config/colours";
import routes from "../navigation/routes";
import listingApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityLoader from "../components/AppActivityLoader";
import useApi from "../hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: "Red Jacket for sale.",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition.",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  const { request: loadListings, error, loading, data: listings } = useApi(
    listingApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Sorry, cannot retrieve listings from the server.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <AppActivityLoader visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colours.lightGrey,
  },
});
export default ListingsScreen;

import React from "react";
import { View, StyleSheet } from "react-native";

import colours from "../config/colours";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: { width: "100%", height: 1, backgroundColor: colours.lightGrey },
});

export default ListItemSeparator;

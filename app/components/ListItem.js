import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/AppText";
import colours from "../config/colours";

const ListItem = ({ image, title, subtitle, onPress, renderRightActions }) => (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colours.lightGrey} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  </Swipeable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
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

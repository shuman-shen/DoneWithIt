import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/AppText";
import colours from "../config/colours";

const DriverListItem = ({
  sequence,
  title,
  subtitle,
  onPress,
  renderRightActions,
}) => (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colours.lightGrey} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.sequence}>
          <Text style={{ fontSize: 20, color: "white" }}>
            {title.charAt(0)}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
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
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  sequence: {
    width: 40,
    height: 40,
    borderRadius: 35,
    backgroundColor: colours.secondary,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
  subtitle: {
    color: colours.mediumGrey,
    fontSize: 14,
  },
});
export default DriverListItem;

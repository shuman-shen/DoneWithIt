import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import AppText from "../AppText";
import colours from "../../config/colours";

const ListItem = ({
  IconComponent,
  image,
  title,
  subtitle,
  showChevrons,
  onPress,
  renderRightActions,
}) => (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colours.lightGrey} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          {subtitle && (
            <AppText numberOfLines={2} style={styles.subtitle}>
              {subtitle}
            </AppText>
          )}
        </View>
        {showChevrons && (
          <Icons
            color={colours.mediumGrey}
            name="chevron-right"
            size={25}
            color={colours.mediumGrey}
          />
        )}
      </View>
    </TouchableHighlight>
  </Swipeable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colours.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colours.mediumGrey,
  },
});
export default ListItem;

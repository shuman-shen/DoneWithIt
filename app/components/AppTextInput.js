import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import colours from "../config/colours";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Icons
          style={styles.icon}
          name={icon}
          size={20}
          color={colours.mediumGrey}
        />
      )}
      <TextInput style={[defaultStyles.text, styles.text]} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { marginRight: 10 },
  text: { flex: 1 },
});

export default AppTextInput;

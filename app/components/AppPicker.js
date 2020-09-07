import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";

import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
import defaultStyles from "../config/styles";
import colours from "../config/colours";

const AppPicker = ({
  icon,
  placeholder,
  items,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  onSelectedItem,
  selectedItem,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <Icons
              style={styles.icon}
              name={icon}
              size={20}
              color={colours.mediumGrey}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <Icons name="chevron-down" size={20} color={colours.mediumGrey} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                  console.log(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colours.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  text: { flex: 1 },
  placeholder: { flex: 1, color: colours.mediumGrey },
  icon: { marginRight: 10 },
});

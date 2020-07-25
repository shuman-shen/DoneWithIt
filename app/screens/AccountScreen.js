import React from "react";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import { FlatList, View, StyleSheet } from "react-native";
import colours from "../config/colours";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colours.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colours.secondary,
    },
  },
];

function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subtitle="programmingwithmosh@gmail.com"
        />
      </View>
      <View>
        <FlatList
          style={styles.container}
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
            />
          )}
        />
      </View>
      <ListItem
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        title="Log Out"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colours.lightGrey,
  },
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;

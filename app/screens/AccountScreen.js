import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import colours from "../config/colours";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colours.primary,
    },
    targetScreen: routes.LISTINGS,
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colours.secondary,
    },
    targetScreen: routes.MESSAGE,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/profile.jpg")}
          title="Amy Yan"
          subtitle="amy_yan@gmail.com"
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
              onPress={() => navigation.navigate(item.targetScreen)}
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

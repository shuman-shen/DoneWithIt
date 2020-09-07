import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

import colours from "../config/colours";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title:
      "T2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghggh",
    description:
      "T2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghgghT2fhgfhgfghfhgfhgfhgffgfhfghffghfghfhhfgfghgfhgfghfhghhfghghghghghhghghgghhghghghhghgghghhgghghggh",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            showChevrons={true}
            onPress={() => console.log("pressed.")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;

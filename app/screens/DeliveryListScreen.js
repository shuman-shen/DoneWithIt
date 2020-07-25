import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import DriverListItem from "../components/DriverListItem";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import colours from "../config/colours";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    sequence: 1,
    title: "Plateia Cakes And Cafe+",
    description: "Shop 143B Waverley Garden Shopping Center Mulgrave VIC",
  },
  {
    sequence: 2,
    title: "Mountain Gate Fish Chips WINCHAN PTY LTD+",
    description: "1880 Ferntree Gully Rd Ferntree Gully VIC",
  },
  {
    sequence: 3,
    title: "Noodle & More+",
    description:
      "Shop 5, Amberley Park Shopping Centre 101 Seebeck Drive  Narre Warren VIC",
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.sequence.toString()}
        renderItem={({ item }) => (
          <DriverListItem
            title={item.title}
            subtitle={item.description}
            sequence={item.sequence}
            onPress={() => console.log("pressed.")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;

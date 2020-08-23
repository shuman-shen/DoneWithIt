import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}

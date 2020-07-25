import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListDetailsScreen from "./app/screens/ListDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import DeliveryListScreen from "./app/screens/DeliveryListScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

export default function App() {
  return (
    <Screen>
      <Icon name="email" />
    </Screen>
  );
}

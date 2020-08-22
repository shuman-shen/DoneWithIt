import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CAMERA
    );
    // const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) {
      alert(
        "You need to enable the permission to access the camera and the photo library."
      );
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
    } catch (error) {
      console.log("Error reading an image.");
    }
  };
  return (
    <Screen>
      <Button title="Select an image" onPress={selectImage} />
    </Screen>
  );
}

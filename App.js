import React, { useEffect, useState } from "react";
import { Button, Image, Text } from "react-native";
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
  const [imageUri, setImageUri] = useState();

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image.");
    }
  };
  return (
    <Screen>
      <Button title="Select an image" onPress={selectImage} />
      <Image
        source={{
          uri: imageUri,
        }}
        style={{ width: 200, height: 200 }}
      />
    </Screen>
  );
}

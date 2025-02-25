import React from "react";
import LottieView from "lottie-react-native";

const AppActivityLoader = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    ></LottieView>
  );
};

export default AppActivityLoader;

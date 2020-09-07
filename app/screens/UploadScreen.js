import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import LottieView from "lottie-react-native";
import AppText from "../components/AppText";
import colours from "../config/colours";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar
            width={200}
            progress={progress}
            color={colours.primary}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animation}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
  },
});

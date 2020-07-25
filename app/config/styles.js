import { Platform } from "react-native";
import colours from "./colours";

export default {
  colours,
  text: {
    fontSize: 18,
    color: colours.darkGrey,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
};

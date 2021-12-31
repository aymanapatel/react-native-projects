import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    backgroundColor: "#eee",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

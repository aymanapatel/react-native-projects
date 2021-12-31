import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTab from "../components/HeaderTab";
import GlobalStyles from "../GlobalStyles";

export default function Home() {
  return (
    /* SafeAreaView does not work with android. Hence the Global Style */
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <HeaderTab />
    </SafeAreaView>
  );
}

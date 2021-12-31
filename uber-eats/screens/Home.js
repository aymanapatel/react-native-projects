import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import GlobalStyles from "../GlobalStyles";

export default function Home() {
  return (
    /* SafeAreaView does not work with android. Hence the Global Style */
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}

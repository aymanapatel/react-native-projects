import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import GlobalStyles from "../GlobalStyles";

export default function Home() {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  return (
    /* SafeAreaView does not work with android. Hence the Global Style */
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

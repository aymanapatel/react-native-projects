import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItems, {
  fourSquareApi,
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import GlobalStyles from "../GlobalStyles";

export default function Home() {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  const [fourSquareRestaurantData, setfourSquareRestaurantData] =
    useState(fourSquareApi);
  const [city, setcity] = useState("Sans Francisco");
  const [activeTab, setactiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const fourSqaureUrl = `https://api.foursquare.com/v3/places/search?near=Delhi`;

    const apiOptions = {
      headers: {
        Authorization: `fsq36XfhGzPXklxRkv1QiUUzvV1oBJIrtCmMB+lMldP3A7Y=`,
        Accept: "application/json",
      },
    };

    console.log("----------------------- Before ----------------");

    const response = fetch(fourSqaureUrl, apiOptions)
      .then((res) => res.json())
      // Yelp API
      //   .then((json) =>
      //     setrestaurantData(
      //       json.businesses.filter((business) =>
      //         business.transactions.includes(activeTab.toLowerCase())
      //       )
      //     )
      //   )
      .catch((error) => {
        console.log("------------Error", error);
      });

    console.log("----------------------- After ----------------", response);

    return response;
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, []);

  return (
    /* SafeAreaView does not work with android. Hence the Global Style */
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {/* Yelp API */}
        <RestaurantItems restaurantData={restaurantData} />
        {/* 4Square API */}

        <RestaurantItems restaurantData={fourSquareRestaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

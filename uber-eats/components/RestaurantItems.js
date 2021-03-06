import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export const fourSquareApi = [
  {
    fsq_id: "4d84aefef9f3a1cdc475ba64",
    categories: [
      {
        id: 17069,
        name: "Grocery Store / Supermarket",
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/shops/food_grocery_",
          suffix: ".png",
        },
      },
    ],
    chains: [],
    distance: 2794,
    geocodes: {
      main: {
        latitude: 28.645728604671543,
        longitude: 77.12126068889171,
      },
    },
    location: {
      address: "Shop No. H 23, Rajouri Garden, Main Market",
      country: "IN",
      cross_street: "Major Sudesh Kumar Marg",
      locality: "New Delhi",
      postcode: "110027",
      region: "Delhi",
    },
    name: "Main Market Rajouri Garden",
    related_places: {
      children: [
        {
          fsq_id: "562d0337498e2c7866d61429",
          name: "The Momoz Hub",
        },
        {
          fsq_id: "4e5a25b3185036bc29ef9fde",
          name: "Anjlika Pastry Shop",
        },
        {
          fsq_id: "543d39dc498ec747962fb647",
          name: "R S Moth Kachori (Hawker), Rajouri Garden",
        },
      ],
    },
    timezone: "Asia/Kolkata",
  },
  {
    fsq_id: "520ca1d511d22b2278ba3baf",
    categories: [
      {
        id: 13145,
        name: "Fast Food Restaurant",
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/food/fastfood_",
          suffix: ".png",
        },
      },
    ],
    chains: [],
    distance: 946,
    geocodes: {
      main: {
        latitude: 28.63625993641573,
        longitude: 77.09710377503137,
      },
    },
    location: {
      address: "Tilak Nagar Metro Station",
      country: "IN",
      cross_street: "",
      postcode: "941735",
    },
    name: "McDonald's",
    related_places: {},
    timezone: "Asia/Kolkata",
  },
];

export const fourSquarePhotosApi = [
  {
    id: "51447d80e4b07022e624d89a",
    created_at: "2013-03-16T14:11:12.000Z",
    prefix: "https://fastly.4sqi.net/img/general/",
    suffix: "/49280338_oKkAfybD45AN3Xi567iB70nW73u9XgsK-Rm2WF7C79Q.jpg",
    width: 960,
    height: 720,
    classifications: ["outdoor"],
  },
  {
    id: "51618876e4b0a489efeb612a",
    created_at: "2013-04-07T14:53:42.000Z",
    prefix: "https://fastly.4sqi.net/img/general/",
    suffix: "/14907_UtE3E9iCzgpFsXGaSKI9dNalKS6AIJvXrVm0FHj-fRA.jpg",
    width: 720,
    height: 960,
  },
  {
    id: "53b51b0211d2820a3884ca33",
    created_at: "2014-07-03T08:57:38.000Z",
    prefix: "https://fastly.4sqi.net/img/general/",
    suffix: "/87704329_0Q7NnApP6eTf16dVy7BUZ7p0A7yZt4K3DnZi2v6ssZM.jpg",
    width: 1000,
    height: 1000,
  },
  {
    id: "51fbdf40498ee72736aab425",
    created_at: "2013-08-02T16:33:04.000Z",
    prefix: "https://fastly.4sqi.net/img/general/",
    suffix: "/53463505_BWZksgu4hxTomxLoAHUYblx-48nr3QBbhy6cdpYUJaE.jpg",
    width: 720,
    height: 960,
  },
  {
    id: "54c78038498ede18241f640a",
    created_at: "2015-01-27T12:10:32.000Z",
    prefix: "https://fastly.4sqi.net/img/general/",
    suffix: "/11642136_1eM51eBTXT3wBuua4q_4JzTSm77eufkfow3Y78GBOjA.jpg",
    width: 1440,
    height: 1920,
  },
  {
    id: "52331e7b11d2cfc54ce6a93d",
    created_at: "2013-09-13T14:17:31.000Z",
    prefix: "https://fastly.4sqi.net/img/general/",
    suffix: "/62846738_3FvgjOURHfNrIDxTtR8mk2BfL2phgRwyNpIXDC_55sw.jpg",
    width: 960,
    height: 720,
  },
  {
    id: "53046564498ee03ac34f9714",
    created_at: "2014-02-19T08:03:48.000Z",
    prefix: "https://fastly.4sqi.net/img/general/",
    suffix: "/318829_lDUSs_3MHOL3_K90mo2TAfuGBtI-a85nOrML86BzENU.jpg",
    width: 640,
    height: 640,
    classifications: ["food"],
  },
  {
    id: "59a12ad09e3b655b3954f85e",
    created_at: "2017-08-26T08:01:20.000Z",
    prefix: "https://fastly.4sqi.net/img/general/",
    suffix: "/3496198_0_AWQ58rh728KsSyJMAbhjG1UWZuhjA1aU7RTQnS2CE.jpg",
    width: 1440,
    height: 1920,
  },
];

export default function RestaurantItems({ ...props }) {
  const getPhotoURL = (image_url) => {
    if (image_url === undefined) {
      const imageObject = fourSquarePhotosApi[0];
      const fastlyCDNLink = `${imageObject["prefix"]}original${imageObject["suffix"]}`;
      return fastlyCDNLink;
    } else {
      return image_url;
    }
  };

  return (
    <View>
      {props.restaurantData.map((restuarant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
        >
          <View
            style={{
              marginTop: 10,
              backgroundColor: "white",
              padding: 15,
            }}
          >
            <RestaurantImage image={getPhotoURL(restuarant.image_url)} />
            <RestaurantInfo
              name={restuarant.name}
              rating={restuarant.rating ?? "4.5"}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const RestaurantImage = (props) => (
  <View>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 ??? min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);

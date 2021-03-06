import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.js";
import IntroScreen from "../screens/ChatScreen.js";
import CovidScreen from "../screens/CovidScreen.js";
import COLORS from "../assets/colors/colors";
import ProfileScreen from "../screens/ProfileScreen";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Location from "expo-location";
import { Alert } from "react-native";
import colors from "../assets/colors/colors";
import axios_base from "../data/axios.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Layout from "../screens/Layout.js";

const Tab = createBottomTabNavigator();

const tabs = ({ navigation, route }) => {
  const [city, setCity] = useState(null);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    location();
    userDetails();
  }, []);

  const location = () => {
    Location.requestForegroundPermissionsAsync()
      .then((status) => {
        if (status.granted) {
          Location.getCurrentPositionAsync()
            .then((location) => {
              if (location.coords) {
                const { latitude, longitude } = location.coords;
                let response = Location.reverseGeocodeAsync({
                  latitude,
                  longitude,
                });
                response.then((addresses) => {
                  for (let address of addresses) {
                    if (address) {
                      setCity(address.city);
                    }
                  }
                });
              }
            })
            .catch((error) => {
              setCity("Loading...");
            });
        } else {
          Alert.alert(
            "Check your Internet! ",
            "Location Fetching Error",

            [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
                color: colors.green,
              },
            ]
          );
          setCity("Locating....");
        }
      })
      .catch((error) =>
        Alert.alert(
          "Check your Location Permission! ",
          "Location Fetching Error" + error,

          [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
              color: colors.green,
            },
          ]
        )
      );
    setCity("Loading....");
  };

  const userDetails = () => {
    AsyncStorage.getItem("@user_token")
      .then(async (token) => {
        await axios_base
          .get("/user_data" + token)
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.log(error);
            Alert.alert(
              "User Data Fetching Errors ",
              error[{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
          });
      })
      .catch((err) => {
        Alert.alert(
          "No Token Error",
          error[{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      });
  };

  return (
    <Tab.Navigator
      initialRouteName="Homes"
      tabBarOptions={{ activeTintColor: COLORS.red, showLabel: false }}
    >
      <Tab.Screen
        name={"Homes"}
        children={() => (
          <HomeScreen
            city={city !== null ? city : "Loading..."}
            name={user !== null ? user.name : "loading..."}
            isDoctor={user !== null ? user.isDoctor : false}
          />
        )}
        options={{
          tabBarIcon: ({ color = COLORS.red, size }) => (
            <Icons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="covid"
        children={() => <CovidScreen />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="virus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Chat"}
        children={() => <IntroScreen user={user} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="message-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={"Profile"}
        children={() => (
          <ProfileScreen user={user} fetcherData={() => userDetails} />
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="account-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default tabs;

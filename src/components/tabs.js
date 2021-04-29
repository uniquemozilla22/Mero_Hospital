import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.js";
import IntroScreen from "../screens/IntroScreen.js";
import COLORS from "../assets/colors/colors";
import IMAGES from "../assets/image/images";

const Tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: COLORS.green }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image source={IMAGES.home} style={styles.navigationImage} />
          ),
        }}
      />
      <Tab.Screen
        name={"Intro"}
        component={IntroScreen}
        options={{
          tabBarLabel: "Intro",
          tabBarIcon: ({ color, size }) => (
            <Image source={IMAGES.home} style={styles.navigationImage} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationImage: {
    width: 25,
    height: 25,
  },
});

export default tabs;

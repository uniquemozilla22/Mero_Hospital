import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.js";
import IntroScreen from "../screens/ChatScreen.js";
import COLORS from "../assets/colors/colors";
import ProfileScreen from "../screens/ProfileScreen";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();




const tabs = ({navigation, route}) => {

  return (
    <Tab.Navigator
      initialRouteName="Homes"
      tabBarOptions={{ activeTintColor: COLORS.red, showLabel: false }}
    >
      <Tab.Screen
        name={"Homes"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color = COLORS.red, size }) => (
            <Icons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Chat"}
        component={IntroScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="message-outline" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreen}
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

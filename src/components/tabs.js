import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.js";
import IntroScreen from "../screens/ChatScreen.js";
import COLORS from "../assets/colors/colors";
import LoginScreen from "../screens/LoginScreen.js";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import StoreScreen from "../screens/StoreScreen.js";

const Tab = createBottomTabNavigator();

const tabs = () => {
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
        name={"shop"}
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="store-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Login"}
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="login" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default tabs;

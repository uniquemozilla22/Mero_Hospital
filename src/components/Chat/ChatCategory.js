import React from "react";
import Layout from "../../screens/Layout";
import ChatHeading from "./ChatHeading.js";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import createChat from "./create_chat/createChat";
import colors from "../../assets/colors/colors";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";
import Messages from "./messages/Messages";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const ChatCategory = ({ user }) => {
  return user.isDoctor ? (
    <Stack.Navigator
      initialRouteName="Messages"
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.greengrey,
        style: {
          backgroundColor: colors.white,
          borderColor: colors.white,
        },
      }}
      style={{ backgroundColor: colors.grey }}
      headerMode={"none"}
    >
      <Stack.Screen
        name="Messages"
        children={() => <Messages isDoctor={user.isDoctor} />}
      />
    </Stack.Navigator>
  ) : (
    <>
      <Tab.Navigator
        initialRouteName="createchat"
        tabBarOptions={{
          activeTintColor: colors.black,
          showLabel: false,
          showIcon: true,
          inactiveTintColor: colors.greengrey,
          style: {
            backgroundColor: colors.white,
            borderColor: colors.white,
          },
        }}
        style={{ backgroundColor: colors.grey }}
        headerMode={"none"}
      >
        <Tab.Screen
          name="createchat"
          component={createChat}
          options={{
            tabBarLabel: "Create a Chat",
            tabBarIcon: ({ color, size }) => (
              <Icons name="chat-plus" color={color} size={25} />
            ),
          }}
        />

        <Tab.Screen
          name="Messages"
          children={() => <Messages isDoctor={user.isDoctor} />}
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({ color, size }) => (
              <Icons name="forum" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    margin: 10,
  },
});
export default ChatCategory;

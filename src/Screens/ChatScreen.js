import React from "react";
import ChatCategory from "../components/Chat/ChatCategory";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const ChatScreen = () => {
  return (
    <Stack.Navigator initialRouteName="chat" headerMode={"none"}>
      <Stack.Screen name="chat" component={ChatCategory} />
    </Stack.Navigator>
  );
};

export default ChatScreen;

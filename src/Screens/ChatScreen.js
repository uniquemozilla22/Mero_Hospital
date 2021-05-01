import React from "react";
import ChatCategory from "../components/Chat/ChatCategory.js";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const ChatScreen = () => {
  return (
    <Stack.Navigator initialRouteName="chat" headerMode={"none"}>
      <Stack.Screen name="chat" component={ChatCategory} />
    </Stack.Navigator>
  );
};

export default ChatScreen;

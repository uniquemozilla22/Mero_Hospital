import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Store from "../components/store/Store.js";
import Layout from "./Layout";
const Stack = createStackNavigator();

const StoreScreen = () => {
  return (
    <Stack.Navigator initialRouteName="store" headerMode={"none"}>
      <Stack.Screen name="store" component={Store} />
    </Stack.Navigator>
  );
};

export default StoreScreen;

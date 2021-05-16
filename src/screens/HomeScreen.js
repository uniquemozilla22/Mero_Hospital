import React from "react";
import { Text } from "react-native";
import Home from "../components/Home/Home.js";
import Layout from "./Layout.js";
import { createStackNavigator } from "@react-navigation/stack";
import Appointment  from '../components/Appointment/Appointment'
const Stack = createStackNavigator()

const HomeScreen = () => {
  return (
      <>
        <Stack.Navigator initialRouteName={"home"} headerMode={"none"}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="appointment" component={Appointment} />
        </Stack.Navigator>
      </>
  );
};

export default HomeScreen;

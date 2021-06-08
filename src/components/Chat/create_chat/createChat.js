import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChooseFeild from "./chooseFeild/ChooseFeild";
import DoctorList from "./doctorList/DoctorList";

const Stack = createStackNavigator();

const createChat = () => {
  return (
    <Stack.Navigator initialRouteName="chooseFeild" headerMode={"none"}>
      <Stack.Screen name="chooseFeild" component={ChooseFeild} />
      <Stack.Screen name="doctorlist" component={DoctorList} />
    </Stack.Navigator>
  );
};

export default createChat;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Covid from '../components/covid/Covid'
import SingleNewsScreen from "../components/covid/News/singlenews";

const Stack = createStackNavigator();

const CovidScreen = () => {
  return (
    <Stack.Navigator initialRouteName="covid" headerMode={"none"}>
      <Stack.Screen name="covid" component={Covid}/>
      <Stack.Screen name="singlenews" component={SingleNewsScreen}/>
    </Stack.Navigator>
  );
};

export default CovidScreen;

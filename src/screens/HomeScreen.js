import React from "react";
import Home from "../components/Home/Home.js";
import { createStackNavigator } from "@react-navigation/stack";
import Appointment  from '../components/Appointment/Appointment'
const Stack = createStackNavigator()

const HomeScreen = (props) => {

  return (
      <>
        <Stack.Navigator initialRouteName="home" headerMode="none">
          <Stack.Screen name="home" children={()=><Home {...props}/>} />
          <Stack.Screen name="appointment" component={Appointment} />
        </Stack.Navigator>
      </>
  );
};

export default HomeScreen;

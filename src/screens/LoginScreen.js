import React from "react";
import Login from "../components/Login/Login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LoginScreen = ({navigation,route}) => {

  
  return (
    <>
    <Login navigation={navigation} route={route}/>
    </>
  );
};

export default LoginScreen;

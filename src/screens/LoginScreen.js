import React from "react";
import Login from "../components/Login/Login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LoginScreen = () => {
  return (
    <Stack.Navigator initalRouteName={"Login"} headerMode={"none"}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default LoginScreen;

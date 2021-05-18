import React, { useState } from "react";
import 'intl'
import 'intl/locale-data/jsonp/en'; 
import {View, AsyncStorage} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./src/components/tabs";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/components/SignUp/SignUp";
const App = () => {
  const Stack = createStackNavigator();
  let [displayLoginPage,setDisplayLoginPage] = useState()


    

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName={"login"} headerMode={"none"}>
          <Stack.Screen name="application" component={Tabs} />
          <Stack.Screen name="login" component={LoginScreen}/>
          <Stack.Screen name="signup" component={SignUpScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

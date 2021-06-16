import React from "react";
import ProfileHome from "./Home/Profile.js";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddDoctor from "./AddDoctor/AddDoctor.js";

const Screen = (props) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="ProfileHome" headerMode="none">
      <Stack.Screen name="ProfileHome" component={ProfileHome} />
      <Stack.Screen
        name="adddoctor"
        children={() => <AddDoctor category={props.category} />}
      />
      {/* <Stack.Screen name="addcategory" component={} /> */}
    </Stack.Navigator>
  );
};

export default Screen;

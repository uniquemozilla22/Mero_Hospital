import React from "react";
import ProfileHome from "./Home/Profile.js";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddDoctor from "./AddDoctor/AddDoctor.js";
import AddCategory from "./AddCategory/AddCategory.js";

const Screen = (props) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="ProfileHome" headerMode="none">
      <Stack.Screen name="ProfileHome" component={ProfileHome} />
      <Stack.Screen
        name="adddoctor"
        children={() => (
          <AddDoctor category={props.category} token={props.token} />
        )}
      />
      <Stack.Screen name="addcategory" component={AddCategory} />
    </Stack.Navigator>
  );
};

export default Screen;

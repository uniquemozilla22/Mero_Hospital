import React from "react";
import Categories from "./Categories";
import { createStackNavigator } from "@react-navigation/stack";
import EditCategory from "./EditCategories/Edit";

const Screen = (props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="CategoryHome" headerMode="none">
      <Stack.Screen
        name="CategoryHome"
        children={() => <Categories {...props} />}
      />
      <Stack.Screen name="EditCategory" component={EditCategory} />
    </Stack.Navigator>
  );
};

export default Screen;

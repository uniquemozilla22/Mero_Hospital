import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Store from "../components/store/storeHome/Store";
import Single_product from "../components/store/single_product/single_product";
import Cart from "../components/store/cart/cart";

const Stack = createStackNavigator();

const StoreScreen = () => {
  return (
    <Stack.Navigator initialRouteName="storeHome" headerMode={"none"}>
      <Stack.Screen name="storeHome" component={Store} />
      <Stack.Screen name="singleProduct" component={Single_product} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default StoreScreen;

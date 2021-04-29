import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { DrawerLayoutAndroid, StyleSheet, Text, View } from "react-native";
import Tabs from "./src/components/tabs";

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default App;

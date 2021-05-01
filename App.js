import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs";
import { Provider as PaperProvider } from "react-native-paper";
const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Tabs />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./src/screens/LoginScreen";
const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <LoginScreen />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

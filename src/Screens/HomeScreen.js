import React from "react";
import { Text } from "react-native";
import Home from "../components/Home/Home.js";
import Layout from "./Layout.js";

const HomeScreen = () => {
  return (
    <Layout cart={false}>
      <Home />
    </Layout>
  );
};

export default HomeScreen;

import React from "react";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Layout from "../../screens/Layout";
import Heading from "./Heading.js";
import Items from "./Items.js";

const Categories = ({ categoryData }) => {
  return categoryData ? (
    <Layout>
      <Heading topic={"Hospital Feilds"} />
      {Object.keys(categoryData).map((index) => (
        <Items key={categoryData[index]._id} data={categoryData[index]} />
      ))}
    </Layout>
  ) : (
    <ActivityIndicator size="large" />
  );
};

export default Categories;

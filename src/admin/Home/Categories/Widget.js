import React from "react";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Box from "./Box";

const Widget = ({ categoryData }) => {
  return categoryData ? (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Object.keys(categoryData).map((index) => (
        <Box key={categoryData[index]._id} category={categoryData[index]} />
      ))}
    </ScrollView>
  ) : (
    <ActivityIndicator size="large" />
  );
};

export default Widget;

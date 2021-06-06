import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import axios_base from "../../../../data/axios";
import colors from "../../../../assets/colors/colors";
import CategoryCard from "./CategoryCard.js";
import Layout from "../../../../screens/Layout";
import Heading from "./Heading";

const ChoosrFeild = () => {
  const [categoryData, setCategoryData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios_base
      .get("/categories")
      .then(({ data }) => {
        setCategoryData(data);
      })
      .catch((error) => {
        Alert.alert(
          "Check your Internet! ",
          "Server Fetching Errors:" + error,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      });
  };

  return  (
    <Layout fetcherData={fetchData}>
      <Heading />
      {categoryData?categoryData.map((keys, value) => 
        <CategoryCard
          key={categoryData[value]._id}
          categoryId={categoryData[value]._id}
          source={categoryData[value].image}
          title={categoryData[value].name}
          description={categoryData[value].description}
        />
      
    ):<ActivityIndicator size={"large"}/>}
    </Layout>
  );
};

export default ChoosrFeild;

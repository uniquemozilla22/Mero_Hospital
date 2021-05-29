import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import axios_base from "../../../../data/axios";
import colors from "../../../../assets/colors/colors";
import CategoryCard from "./CategoryCard.js";
import Layout from "../../../../screens/Layout";
import Heading from "./Heading";

const ChoosrFeild = () => {
  const [categoryData, setCategoryData] = useState(null);
  const [displayCards, setDisplayCards] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios_base
      .get("/categories")
      .then(({ data }) => {
        setCategoryData(data);
        setDisplayCards(display(data));
      })
      .catch((error) => {
        Alert.alert(
          "Check your Internet! ",
          "Server Fetching Errors:" + error,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      });
  };

  const display = (data) => {
    let cardings = [];
    data.map((keys, value) => {
      cardings[value] = (
        <CategoryCard
          key={data[value]._id}
          categoryId={data[value]._id}
          source={data[value].image}
          title={data[value].name}
          description={data[value].description}
        />
      );
    });

    return cardings;
  };

  return displayCards !== [] ? (
    <Layout>
      <Heading />
      {displayCards}
    </Layout>
  ) : (
    <ActivityIndicator size="large" color={colors.green} />
  );
};

export default ChoosrFeild;

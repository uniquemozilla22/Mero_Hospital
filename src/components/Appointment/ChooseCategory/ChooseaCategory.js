import React, { useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import axios from "../../../data/axios";
import Layout from "../../../screens/Layout";
import CategoryCard from "./CategoryCard.js";
import Heading from "./Heading.js";
import colors from "../../../assets/colors/colors";

const ChooseACategory = () => {
  const [dataCategory, setDataCategory] = React.useState(null);
  const [cards, setCards] = useState();

  React.useEffect(() => {
    fetchCategoryData();
  }, [cards]);

  const fetchCategoryData = () => {
    axios
      .get("/categories")
      .then(({ data }) => {
        setDataCategory(data);
        setCards(display(data));
      })
      .catch((error) => {
        console.log(error);
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
          path={"Home"}
          description={data[value].description}
        />
      );
    });

    return cardings;
  };

  return dataCategory !== null ? (
    <Layout cart={false}>{cards}</Layout>
  ) : (
    <ActivityIndicator size="large" color={colors.green} />
  );
};

export default ChooseACategory;

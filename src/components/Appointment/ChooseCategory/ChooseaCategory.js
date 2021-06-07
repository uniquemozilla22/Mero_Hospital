import React, { useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import axios from "../../../data/axios";
import Layout from "../../../screens/Layout";
import CategoryCard from "./CategoryCard.js";

const ChooseACategory = () => {
  const [dataCategory, setDataCategory] = useState(null);

  React.useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = () => {
    axios
      .get("/categories")
      .then((response) => {
        setDataCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout fetcherData={() => fetchCategoryData}>
      {dataCategory !== null ? (
        dataCategory.map((keys, value) => (
          <CategoryCard
            key={dataCategory[value]._id}
            categoryId={dataCategory[value]._id}
            source={dataCategory[value].image}
            title={dataCategory[value].name}
            path={"Home"}
            description={dataCategory[value].description}
          />
        ))
      ) : (
        <ActivityIndicator size={"large"} />
      )}
    </Layout>
  );
};

export default ChooseACategory;

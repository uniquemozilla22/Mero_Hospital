import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "./ProductCard";
import StoreHeading from "./StoreHeading";

const Category = ({ category }) => {
  return (
    <>
      <StoreHeading topic={category} />
      <ScrollView
        style={styles.half_spaces}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />

        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  half_spaces: {
    flex: 1,
    margin: 5,
  },
});
export default Category;

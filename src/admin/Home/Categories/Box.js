import ImagedCarouselCard from "react-native-imaged-carousel-card";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

const Box = ({ category }) => {
  const { description, image, name, _id } = category;
  console.log(image);
  return (
    <TouchableOpacity style={styles.container}>
      <ImagedCarouselCard
        doc
        width={300}
        height={250}
        shadowColor={colors.white}
        source={{
          uri: image,
        }}
        textStyle={styles.title}
        text={name}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  title: {
    padding: 10,
    fontWeight: "600",
    color: colors.white,
  },
});

export default Box;

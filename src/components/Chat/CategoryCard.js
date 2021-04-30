import React from "react";
import { Card } from "galio-framework";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";

const HeadingCard = ({ source, title, context }) => {
  return (
    <>
      <Card
        flex
        borderless
        style={styles.card}
        title={title}
        imageStyle={styles.cardImageRadius}
        image={source}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 5,
  },
  cardImageRadius: {
    borderRadius: 10,
    height: 120,
  },

  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
});

export default HeadingCard;

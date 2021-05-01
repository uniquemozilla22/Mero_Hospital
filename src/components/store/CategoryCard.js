import React from "react";
import { Card } from "galio-framework";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const HeadingCard = ({ source, title, context }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card}>
      <Card
        flex
        borderless
        title={title}
        imageStyle={styles.cardImageRadius}
        image={source}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: "#ffffff",
    margin: 5,
    flex: 1,
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

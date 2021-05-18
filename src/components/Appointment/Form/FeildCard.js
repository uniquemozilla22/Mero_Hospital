import React from "react";
import { Card } from "galio-framework";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors/colors.js";
import { useNavigation } from "@react-navigation/native";

const FeildCard = ({ source, title, path , description, categoryId,}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
    >
      <Card
        flex
        borderless  
        style={styles.card}
        title={""}
        caption={description}
        imageStyle={styles.cardImageRadius}
        image={source}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    flex: 1,
  },
  cardImageRadius: {
  },
  half_space: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
});

export default FeildCard;

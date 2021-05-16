import React from "react";
import { Card } from "galio-framework";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors/colors.js";
import { useNavigation } from "@react-navigation/native";

const HeadingCard = ({ source, title, path , description, categoryId}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate({name : "appointmentForm", params:{source, title, path , description, categoryId}})}
    >
      <Card
        flex
        borderless  
        style={styles.card}
        title={title}
        caption={description.substring(0,100) + "..."}
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
    margin: 2.5,
    flex: 1,
  },
  cardImageRadius: {
    borderRadius: 10
  },
  half_space: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
});

export default HeadingCard;

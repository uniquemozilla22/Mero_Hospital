import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const StoreHeading = ({ topic }) => {
  const topic_array = topic.split(" ");

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.greetingUser}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.heading}>
        {topic_array[0] + " "}
        <Text style={styles.redColor}>{topic_array[1]} </Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  greetingUser: {
    marginVertical: 10,
  },
  redColor: {
    color: colors.red,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 30,
  },
});

export default StoreHeading;

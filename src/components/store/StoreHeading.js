import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { Input } from "galio-framework";

const StoreHeading = ({ topic }) => {
  const topic_array = topic.split(" ");
  return (
    <View style={styles.greetingUser}>
      <Text style={styles.heading}>
        {topic_array[0] + " "}
        <Text style={styles.redColor}>{topic_array[1]} </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingUser: {
    marginVertical: 25,
  },
  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 26,
  },
});

export default StoreHeading;

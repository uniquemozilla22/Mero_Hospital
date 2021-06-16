import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

const Heading = ({ topic }) => {
  return (
    <View style={styles.greetingUser}>
      <Text style={styles.heading}>
        {topic.split(" ")[0] + " "}
        <Text style={styles.redColor}>{topic.split(" ")[1]} </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingUser: {
    marginVertical: 20,
  },
  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Heading;

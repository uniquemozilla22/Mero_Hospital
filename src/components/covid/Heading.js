import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors.js";

const Heading = ({title}) => {

  title= title.split(" ")

  return (
    <View style={styles.greetingUser}>
      <Text style={styles.heading}>
        {title[0]}<Text style={styles.redColor}> {title[1]!==undefined?title[1]:null}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingUser: {
    marginVertical: 20,
  },
  redColor: {
    fontWeight: "bold",
    color: colors.green,
  },
  heading: {
    fontSize: 25,
  },
});

export default Heading;

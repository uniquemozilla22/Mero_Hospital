import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../../assets/colors/colors.js";

const Heading = () => {
  return (
    <View style={styles.greetingUser}>
      <Text style={styles.heading}>
        Choose <Text style={styles.redColor}>Feild</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingUser: {
    marginVertical: 10,
    marginBottom: 20,
  },
  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
  },
});

export default Heading;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const Greet = ({ user }) => {
  return (
    <View style={styles.greetingUser}>
      <Text style={styles.heading}>
        Welcome , <Text style={styles.redColor}>{user} </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingUser: {
    marginVertical: 10,
  },
  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
  heading: {},
});

export default Greet;

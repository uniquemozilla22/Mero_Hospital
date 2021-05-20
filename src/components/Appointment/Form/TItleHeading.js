import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors.js";

const TitleHeading = ({title}) => {
  title= title.split(" ")
  
  return (
    <View style={styles.greetingUser}>
      <Text style={styles.heading}>
        {title[0].toUpperCase()} <Text style={styles.redColor}>{title.splice(1,title.length).join(" ").toUpperCase()}</Text>
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
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default TitleHeading;

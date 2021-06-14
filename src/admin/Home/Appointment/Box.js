import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

const Box = ({ topic, data }) => {
  return (
    <View style={styles.container}>
      <Text>{topic}</Text>
      <View styles={styles.data}>
        <Text>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    height: 100,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    borderRadius: 10,
    shadowRadius: 6,
  },

  data: {
    alignSelf: "flex-end",
    flex: 1,
  },
});

export default Box;

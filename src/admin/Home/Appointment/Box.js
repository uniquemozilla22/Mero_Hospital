import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";

const Box = ({ topic, data, today }) => {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Text style={styles.topic}>{topic}</Text>
        <View styles={styles.data}>
          <Text style={styles.datatoday}>
            <Entypo name={"plus"} color={colors.green} />
            {today}
          </Text>
          <Text style={styles.datanumber}>{data}</Text>
        </View>
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
    borderColor: colors.grey,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    borderRadius: 20,
    shadowRadius: 6,
    justifyContent: "space-around",
  },
  shadow: {
    flex: 1,

    elevation: 5,
  },
  topic: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.green,
  },
  data: {
    flex: 2,
  },
  datatoday: {
    fontSize: 14,
  },
  datanumber: {
    alignSelf: "flex-end",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Box;

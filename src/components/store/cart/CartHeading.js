import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const StoreHeading = ({ topic }) => {
  const topic_array = topic.split(" ");

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.greetingUser}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="md-chevron-back-outline" size={25} color={colors.black} />
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
    flexDirection: "row",
    alignItems: "center",
  },
  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
  },
});

export default StoreHeading;

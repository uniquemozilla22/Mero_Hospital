import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";
import colors from "../../assets/colors/colors";
const topBar = ({ location, profile }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topBar}>
      <View style={styles.location}>
        <Icons name="map-marker-outline" color={colors.red} size={30} />
        <Text>{location}</Text>
      </View>
      <TouchableOpacity
        style={styles.profile}
        onPress={() => navigation.navigate("Profile")}
      >
        <Icons name="face-profile" color={colors.red} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default topBar;

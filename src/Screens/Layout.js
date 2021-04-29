import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import colors from "../assets/colors/colors";

const Layout = (props) => {
  return <ScrollView style={styles.ViewingIndex}>{props.children}</ScrollView>;
};

const styles = StyleSheet.create({
  ViewingIndex: {
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});
export default Layout;

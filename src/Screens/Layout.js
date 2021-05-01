import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import colors from "../assets/colors/colors";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Layout = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.ViewingIndex}>{props.children}</ScrollView>
      <FAB
        style={styles.fab}
        medium
        icon="cart-outline"
        onPress={() => navigation.navigate("cart")}
        animated={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  ViewingIndex: {
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  fab: {
    backgroundColor: colors.green,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Layout;

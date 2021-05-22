import React from "react";
import { StyleSheet, ScrollView , ToastAndroid} from "react-native";
import colors from "../assets/colors/colors";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Layout = (props) => {
  const navigation = useNavigation();

  const fab_button = props.cart ? (
    <FAB
      style={styles.fab}
      medium
      icon="cart-outline"
      onPress={() => navigation.navigate("cart")}
      animated={true}
    />
  ) : null;


  try{
    return (
      <>
        <ScrollView style={styles.ViewingIndex}>{props.children}</ScrollView>
        {fab_button}
      </>
    );
  }
  catch(error) {
    ToastAndroid.showWithGravityAndOffset(
      "There is a error:"+error,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );


  }
  
};

const styles = StyleSheet.create({
  ViewingIndex: {
    paddingTop: 10,
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

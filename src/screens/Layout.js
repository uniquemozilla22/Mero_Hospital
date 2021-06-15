import React from "react";
import {
  StyleSheet,
  ScrollView,
  ToastAndroid,
  RefreshControl,
} from "react-native";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const Layout = (props) => {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      if (props.fetcherData) {
        props.fetcherData();
      }
      setRefreshing(false);
    });
  }, []);

  try {
    return (
      <>
        <ScrollView
          style={styles.ViewingIndex}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {props.children}
        </ScrollView>
      </>
    );
  } catch (error) {
    ToastAndroid.showWithGravityAndOffset(
      "There is a error:" + error,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }
};

const styles = StyleSheet.create({
  ViewingIndex: {
    minHeight: 600,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});
export default Layout;

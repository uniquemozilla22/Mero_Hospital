import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileHome = (props) => {
  const navigation = useNavigation();

  const logout = () => {
    AsyncStorage.removeItem("@user_id");
    AsyncStorage.removeItem("@user_data");
    AsyncStorage.removeItem("@user_token")
      .then(() => {
        navigation.navigate("login");
      })
      .catch((error) => {
        navigation.navigate("login");
      });
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() => {
              navigation.navigate("adddoctor");
            }}
          >
            <View style={styles.menuItem}>
              <Icon name="pen" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Add Doctor</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <MaterialIcons name="category" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Add Category</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon
                name="account-check-outline"
                color={colors.green}
                size={25}
              />
              <Text style={styles.menuItemText}>Check Appointments</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => logout()}>
            <View style={styles.menuItem}>
              <Icon name="logout" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProfileHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: colors.greengrey,
    borderBottomWidth: 1,
    borderTopColor: colors.greengrey,
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    color: colors.black,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomColor: colors.greengrey,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  menuItemText: {
    color: colors.black,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

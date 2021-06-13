import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Layout from "../../screens/Layout";
import Profile from "./profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../assets/colors/colors";
import axios from "../../data/axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileHome = (props) => {
  const [userData, setUserData] = React.useState(
    props.user !== null ? props.user : null
  );
  const [appointments, setAppointments] = React.useState(null);

  const navigation = useNavigation();

  React.useEffect(() => {
    AsyncStorage.getItem("@user_token")
      .then(async (token) => {
        await axios
          .get("/user_appointment" + token)
          .then((response) => {
            setAppointments(response.data);
          })
          .catch((error) => {
            Alert.alert(
              "Appointment Fetching Error! ",
              error[{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
          });
      })
      .catch((error) => {
        Alert.alert(
          "Token Fetching Error",
          error[{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      });
  }, [appointments]);

  const logout = () => {
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
        {userData !== null ? <Profile data={userData} /> : null}
        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: colors.greengrey,
                borderRightWidth: 1,
                color: colors.black,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={[
                styles.infoBox,
                {
                  color: colors.black,
                },
              ]}
            >
              <Title
                style={{
                  color: colors.black,
                }}
              >
                {userData ? userData.MessageRooms.length : "loading.."}
              </Title>
              <Caption
                style={{
                  color: colors.black,
                }}
              >
                Messages
              </Caption>
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("appointmentlist", { appointments })
              }
              style={[
                styles.infoBox,
                {
                  color: colors.black,
                },
              ]}
            >
              <Title
                style={{
                  color: colors.black,
                }}
              >
                {appointments !== null ? appointments.length : "..."}
              </Title>
              <Caption
                style={{
                  color: colors.black,
                }}
              >
                {"Appontments"}
              </Caption>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() =>
              navigation.navigate({ name: "profileedit", params: { userData } })
            }
          >
            <View style={styles.menuItem}>
              <Icon name="pen" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Edit Profile</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon
                name="account-check-outline"
                color={colors.green}
                size={25}
              />
              <Text style={styles.menuItemText}>Support</Text>
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
  },
  menuItemText: {
    color: colors.black,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

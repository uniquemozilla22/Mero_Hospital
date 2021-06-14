import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Doctor = () => {
  const navigation = useNavigation();
  const logout = () => {
    AsyncStorage.removeItem("@user_data");
    AsyncStorage.removeItem("@user_id");
    AsyncStorage.removeItem("@user_token")
      .then(() => {
        navigation.navigate("login");
      })
      .catch((error) => {
        navigation.navigate("login");
      });
  };
  return (
    <TouchableOpacity onPress={() => logout()} style={{ margin: 100 }}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default Doctor;

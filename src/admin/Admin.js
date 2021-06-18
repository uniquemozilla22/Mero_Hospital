import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import Categories from "./Categories/Screen";
import Home from "./Home/Home";
import Appointment from "./Appointment/Appointment";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Doctor from "./Doctor/Doctor";
import colors from "../assets/colors/colors";
import axios_base from "../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, StyleSheet } from "react-native";
import Profile from "./Profile/Screen";

const Admin = () => {
  const BottomTab = createBottomTabNavigator();
  const [appointmentData, setAppointmentData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [doctorsData, setDoctorsData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetchToken();
  }, [token]);

  const fetchToken = () => {
    AsyncStorage.getItem("@user_token")
      .then((token) => {
        setToken(token);
        fetchAppointments(token);
        fetchCategories();
        fetchDoctors(token);
      })
      .catch((err) =>
        Alert.alert("You are not Logged in", "Token Error :" + err, [
          { text: "OK", onPress: () => {} },
        ])
      );
  };

  const fetchAppointments = (t) => {
    axios_base
      .get("/appointmentsall" + t)
      .then((response) => {
        setAppointmentData(response.data);
      })
      .catch((err) =>
        Alert.alert("You are ", "Token Error :" + err, [
          { text: "OK", onPress: () => {} },
        ])
      );
  };

  const fetchCategories = () => {
    axios_base
      .get("/categories")
      .then((res) => {
        setCategoryData(res.data);
      })
      .catch((err) =>
        Alert.alert("You are not Logged in", "Token Error :" + err, [
          { text: "OK", onPress: () => {} },
        ])
      );
  };

  const fetchDoctors = (t) => {
    axios_base
      .get("/doctorall" + t)
      .then((response) => {
        setDoctorsData(response.data);
      })
      .catch((error) => {
        Alert.alert("You are not Logged in", "Token Error :" + error, [
          { text: "OK", onPress: () => {} },
        ]);
      });
  };

  return (
    <>
      <BottomTab.Navigator
        initialRouteName={"Home"}
        tabBarOptions={{
          activeTintColor: colors.green,
          showLabel: false,
          inactiveTintColor: colors.greengrey,
          style: styles.buttonoptions,
        }}
      >
        <BottomTab.Screen
          name={"Home"}
          children={() => (
            <Home
              appointments={appointmentData ? appointmentData : null}
              categoryData={categoryData ? categoryData : null}
              fetchToken={fetchToken}
            />
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icons name="home-outline" color={color} size={size} />
            ),
            activeTintColor: colors.green,
          }}
        />
        <BottomTab.Screen
          name={"Categories"}
          children={() => (
            <Categories
              categoryData={categoryData ? categoryData : null}
              fetchToken={fetchToken}
            />
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="category" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name={"Appointments"}
          children={() => (
            <Appointment
              appointments={appointmentData ? appointmentData : null}
              fetchToken={fetchToken}
            />
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icons name="format-list-checks" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name={"Doctors"}
          children={() => <Doctor data={doctorsData} fetchToken={fetchToken} />}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icons name="doctor" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name={"Profile"}
          children={() => <Profile category={categoryData} token={token} />}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icons name="account-outline" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  buttonoptions: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Admin;

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Layout from "../../screens/Layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppointmentWidget from "./Appointment/Appointmentwidget";
const Home = (props) => {
  return (
    <Layout>
      <AppointmentWidget {...props} />
      <Text>Doctor</Text>
      <Text>Categories</Text>
    </Layout>
  );
};

export default Home;

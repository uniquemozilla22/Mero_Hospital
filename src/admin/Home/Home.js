import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Layout from "../../screens/Layout";
import AppointmentWidget from "./Appointment/Appointmentwidget";
import CategoriesWidget from "./Categories/Widget.js";
import Heading from "./Heading.js";
const Home = (props) => {
  return (
    <Layout>
      <AppointmentWidget {...props} />
      <Heading topic="Hospital Feilds" />
      <CategoriesWidget {...props} />
      <Heading topic="Today's Appointments" />
      <Text>Today's Appointment</Text>
      <Heading topic="Today's Discussions" />
    </Layout>
  );
};

export default Home;

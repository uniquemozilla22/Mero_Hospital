import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Layout from "../../screens/Layout";
import AppointmentWidget from "./Appointment/Appointmentwidget";
import TodayAppointmentList from "./Appointment/TodayAppointmentList";
import CategoriesWidget from "./Categories/Widget.js";
import Heading from "./Heading.js";
const Home = (props) => {
  return (
    <Layout fetcherData={() => props.fetchToken()}>
      <AppointmentWidget {...props} />
      <Heading topic="Hospital Feilds" />
      <CategoriesWidget {...props} />
      <Heading topic="Today's Appointments" />
      <TodayAppointmentList {...props} />
    </Layout>
  );
};

export default Home;

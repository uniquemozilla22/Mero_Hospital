import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Box from "./Box";

const Appointmentwidget = ({ appointments }) => {
  const todayappointment = appointments
    ? Object.keys(appointments).filter(
        (index) =>
          new Date(appointments[index].date).getDate() === new Date().getDate()
      ).length
    : 0;
  return appointments ? (
    <View style={styles.container}>
      <Box
        topic="Appointments"
        data={appointments.length}
        today={todayappointment}
      />
      <Box topic="Chat Rooms" data={9} today={0} />
    </View>
  ) : (
    <ActivityIndicator size="large" />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default Appointmentwidget;

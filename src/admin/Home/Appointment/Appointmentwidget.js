import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Box from "./Box";

const Appointmentwidget = ({ appointments }) => {
  console.log(appointments);
  return appointments ? (
    <View style={styles.container}>
      <Box topic="Appointments" data={appointments.length} />
      <Box topic="Chat Rooms" data={9} />
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
  },
});

export default Appointmentwidget;

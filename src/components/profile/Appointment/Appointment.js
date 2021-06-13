import React, { useState, useRef, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Layout from "../../../screens/Layout";
import AppointmentHeading from "./AppointmentHeading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../../assets/colors/colors";
import { Modalize } from "react-native-modalize";
import SingleAppointment from "./singleprofile.js";
import axios from "../../../data/axios.js";
import AppointmentList from "./AppointmentList";

const Appointment = ({ route }) => {
  const [datas, setData] = useState(route.params.appointments);
  const [toView, setToView] = useState(null);

  const modalizeRef = useRef(null);

  const onOpen = (data) => {
    modalizeRef.current?.open();
    setToView(data);
  };

  const deleteAppointment = async (appointment_id) => {
    await AsyncStorage.getItem("@user_token")
      .then((token) => {
        axios
          .post("/deleteappointment" + token, { appointment_id })
          .then((response) => {
            if (response.data === "success") {
              Alert.alert(
                "Appointment Removed! ",
                "The Appointment has been removed",
                [
                  {
                    text: "OK",
                    onPress: () => {},
                  },
                ]
              );
            } else {
              Alert.alert(
                "Appointment Not Removed! ",
                "There is some error in the server. We will be right back",
                [{ text: "OK", onPress: () => {} }]
              );
            }
          })
          .catch((error) => {
            Alert.alert(
              "Cannot Remove the Appointment",
              "Check your Internet and Login again ." + error,
              [{ text: "OK", onPress: () => {} }]
            );
          });
      })
      .catch((error) => {
        Alert.alert("Appointment Not Registered! ", "Token Error:" + error, [
          { text: "OK", onPress: () => {} },
        ]);
      });
  };

  return datas ? (
    <>
      <Layout>
        <AppointmentHeading />
        <View style={styles.container}>
          {datas.map((data) => (
            <View key={data._id}>
              <TouchableOpacity onPress={() => onOpen(data)}>
                <AppointmentList
                  key={data._id}
                  data={data}
                  expired={new Date(data.date) <= new Date()}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </Layout>
      <Modalize
        ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        adjustToContentHeight={true}
      >
        <SingleAppointment
          data={toView}
          delete_appointment={deleteAppointment}
        />
      </Modalize>
    </>
  ) : (
    <ActivityIndicator size={"large"} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  cards: {
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: colors.grey,
  },
  exptitle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "600",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  expsubtitle: {
    color: colors.grey,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default Appointment;

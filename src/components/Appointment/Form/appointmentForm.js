import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import CategoryCard from "./FeildCard.js";
import { DateTimePickerModal } from "react-native-paper-datetimepicker";
import { DatePickerModal } from "react-native-paper-dates";
import Layout from "../../../screens/Layout.js";
import colors from "../../../assets/colors/colors.js";
import Heading from "./Heading.js";
import TitleHeading from "./TItleHeading.js";
import axios from "../../../data/axios.js";
import { List, IconButton, ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppointmentFrom = ({ navigation, route }) => {
  const { categoryId, source, title, description } = route.params;

  const [dates, setDates] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  const [dateVisible, setDateVisible] = React.useState(false);
  const [UserFeildAppointment, setUserFeildAppointment] = React.useState(null);
  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDates(params.date);
      setDateVisible(true);
    },
    [setOpen, setDates]
  );


  React.useEffect(() => {
    getUserFeildAppointments();
  }, []);

  const getUserFeildAppointments = async () => {
    await AsyncStorage.getItem("@user_token")
      .then((token) => {
        axios
          .get("/userfeildappointment" + token, {
            params: { feild: categoryId },
          })
          .then((response) => {
            setUserFeildAppointment(response.data);
          })
          .catch((error) => {
            Alert.alert(
              "Check your Internet! ",
              "Server Fetching Errors:" +
                error[{ text: "OK", onPress: () => {} }]
            );
          });
      })
      .catch((error) => {
        Alert.alert(
          "Appointment Not Registered! ",
          "Server Errors:" + error[{ text: "OK", onPress: () => {} }]
        );
      });
  };

  const postData = async () => {
    await AsyncStorage.getItem("@user_token")
      .then((token) => {
        axios
          .post("/appointments" + token, {
            date: dates.toLocaleString(),
            feild: categoryId,
          })
          .then((response) => {
            const { success, error } = response.data;
            success
              ? Alert.alert(
                  "Appointment Registered! ",
                  "Your Appointment has been registered for" +
                    dates.toLocaleString().split(",")[0].trim() +
                    " at time " +
                    dates.toLocaleString().split(",")[1].trim(),

                  [
                    {
                      text: "OK",
                      onPress: () => {
                        getUserFeildAppointments();
                      },
                    },
                  ]
                )
              : Alert.alert(
                  "Appointment Not Registered! ",
                  "" + error.toString(),
                  [{ text: "OK", onPress: () => {} }]
                );
          })
          .catch((error) => {
            console.log(error);
            Alert.alert(
              "Appointment Not Registered! ",
              "Server Errors:" + error[{ text: "OK", onPress: () => {} }]
            );
          });
      })
      .catch((error) => {
        Alert.alert(
          "Appointment Not Registered! ",
          "Token Error:" + error[{ text: "OK", onPress: () => {} }]
        );
      });
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
                "The Appointmenthas been removed",
                [
                  {
                    text: "OK",
                    onPress: () => {
                      getUserFeildAppointments();
                    },
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

  const triggerAlert = (onOkCLick, id) => {
    Alert.alert(
      "Are You Sure?",
      "You will not be given turn as it will be permanently removed",
      [
        { text: "OK", onPress: () => onOkCLick(id) },
        { text: "cancel", onPress: () => {} },
      ]
    );
  };

  return (
    <>
      <Layout fetcherData={() => getUserFeildAppointments()}>
        <TitleHeading title={title} />
        <CategoryCard
          key={categoryId}
          categoryId={categoryId}
          source={source}
          title={title}
          description={description}
        />
        <Heading />
        <DatePickerModal
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={dates}
          onConfirm={onConfirmSingle}
          validRange={{
            startDate: dates,
          }}
        />
        {dateVisible ? (
          <>
            <TitleHeading title={"Your Time"}></TitleHeading>

            <View style={styles.datePickerStyle}>
              <Text visible={dateVisible}>
                <Text style={styles.head}>Date:</Text>{" "}
                {dates.toLocaleString().split(",")[0].trim()}
              </Text>
              <Text visible={dateVisible}>
                <Text style={styles.head}>Time:</Text>{" "}
                {dates.toLocaleString().split(",")[1].trim()}
              </Text>
            </View>
          </>
        ) : null}
        {UserFeildAppointment ? (
          UserFeildAppointment.map((data) => {
            return (
              <List.Item
                key={data._id}
                title={"Date : " + data.date.split(",")[0]}
                description={data.date.split(",")[1]}
                right={(props) => (
                  <IconButton
                    {...props}
                    onPress={() => {
                      triggerAlert(deleteAppointment, data._id);
                    }}
                    icon="delete"
                    color={colors.red}
                  />
                )}
              />
            );
          })
        ) : (
          <ActivityIndicator size={"small"} />
        )}
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={[
            styles.signIn,
            {
              borderSize: 1,
              borderColor: colors.green,
              marginVertical: 5,
              backgroundColor: colors.white,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: colors.green,
                fontWeight: "bold",
              },
            ]}
          >
            Set Date
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={dateVisible ? postData : null}
          style={[
            styles.signIn,
            {
              marginBottom: 25,
              backgroundColor: dateVisible ? colors.green : colors.greengrey,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: colors.white,
                fontWeight: "bold",
              },
            ]}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  datePickerStyle: {
    flexDirection: "row",
    width: 300,
    marginTop: 10,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  head: {
    color: colors.red,
    fontWeight: "bold",
    fontSize: 16,
  },
  signIn: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 35,
  },
});

export default AppointmentFrom;

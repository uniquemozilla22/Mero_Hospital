import React from "react";
import { Card } from "galio-framework";
import { StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios_base from "../../../../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const DoctorItem = ({ data , token}) => {
  const navigation = useNavigation();
  const createChat = async () => {
      console.log(data._id)
    await axios_base
      .post("/createroom" + token, { doctorId: data._id })
      .then((res) => {
          console.log(res.data)
        if (res.data === "success") {
          Alert.alert(
            "Chat with " + data.name + " has been created !",
            "Go to messages",
            [
                {
                  text: "MESSAGES",
                  onPress: () => navigation.navigate("Messages"),
                }
              ]
          );
        } else if (res.data === "error") {
          Alert.alert(
            "Chat with " + data.name + " has  not been created !",
            "Try Again" + error[{ text: "OK", onPress: () => {} }]
          );
        }
      })
      .catch((err) => {
          console.log(err)
        Alert.alert("No Internet Connection", "Try Again", [
          { text: "OK", onPress: () => {} },
        ]);
      });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => createChat()}>
      <Card
        flex
        style={styles.card}
        borderless
        title={data.name}
        caption={
          data.DoctorId.degree +
          " with " +
          data.DoctorId.experience +
          " years of experience"
        }
        location={data.address}
        avatar={data.DoctorId.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 50,
  },
});

export default DoctorItem;

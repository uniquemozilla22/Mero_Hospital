import React from "react";
import { StyleSheet, Alert } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios_base from "../../../../data/axios";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../../assets/colors/colors";

const DoctorItem = ({ data, token }) => {
  console.log(data);
  const navigation = useNavigation();
  const createChat = () => {
    axios_base
      .post("/createroom" + token, { doctorId: data._id })
      .then((res) => {
        if (res.data === "success") {
          Alert.alert(
            "Chat with " + data.name + " has been created !",
            "Go to messages",
            [
              {
                text: "MESSAGES",
                onPress: () => navigation.navigate("Messages"),
              },
            ]
          );
        } else if (res.data === "error") {
          Alert.alert(
            "Chat with " + data.name + " has  not been created !",
            "Try Again" + error[{ text: "OK", onPress: () => {} }]
          );
        } else if (res.data !== null) {
          Alert.alert(
            "Already Consulted",
            "There is already a room created for you to chat with the person",
            [
              {
                text: "Go to messages",
                onPress: () => navigation.navigate("Messages"),
              },
              { text: "OK", onPress: () => {} },
            ]
          );
        }
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("No Internet Connection", "Try Again", [
          { text: "OK", onPress: () => {} },
        ]);
      });
  };

  return (
    <TouchableOpacity onPress={() => createChat()}>
      <Card style={styles.card}>
        <Card.Title
          title={data.name}
          subtitle={
            data.DoctorId.degree +
            " with " +
            data.DoctorId.experience +
            " years of experience"
          }
          left={() => (
            <Avatar.Image size={45} source={{ uri: data.DoctorId.image }} />
          )}
          right={() => (
            <IconButton
              color={colors.red}
              size={20}
              icon="chat-outline"
              onPress={() => createChat()}
            />
          )}
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    fontSize: 20,
  },
});

export default DoctorItem;

import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from "./MessageStyles";
import images from "../../../../assets/image/images";
import axios_base from "../../../../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const UserMessages = ({ navigation }) => {


const [messages, setMessages] = useState(null);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  await AsyncStorage.getItem("@user_token")
    .then(async (token) => {
      console.log(token);
      await axios_base
        .get("/user_data" + token)
        .then((user) => {
          setMessages(user.data.MessageRooms)
        })
        .catch((err) => console.log(err));
    })
    .catch((error) => {
      console.log(error);
    });
};
  return (
    <Container>
      <FlatList
        data={messages}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate("chat", { userName: item.participants[1].name ,roomId:item._id  })
            }
          >
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.participants[1].DoctorId.image} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.participants[1].name}</UserName>
                  <PostTime>{item.participants[1].DoctorId.degree}</PostTime>
                </UserInfoText>
                <MessageText>{"Name: "+item.name}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default UserMessages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

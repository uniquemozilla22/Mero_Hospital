import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
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
import axios_base from "../../../../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Layout from "../../../../screens/Layout.js";
import Greet from "./Boxheading";

const UserMessages = ({ navigation }) => {
  const [messages, setMessages] = useState(null);
  const [isDoctor,setisDoctor]=useState(false)

  useEffect(() => {
    fetchData();
  }, [isDoctor]);

  const fetchData = () => {
    AsyncStorage.getItem("@user_token")
      .then(async(token) => {
        await axios_base
          .get("/user_data" + token)
          .then((user) => {
            setMessages(user.data);
            console.log(user.data)
            setisDoctor(user.data.isDoctor)
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout fetcherData={() => fetchData}>
      <Container>
        <Greet topic={"Your Chat Box"} />
        <View>
          <FlatList
            data={messages?.MessageRooms}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Renderer
                id={item._id}
                participant={item.participants[isDoctor?0:1]}
                name={item.name}
                navigation={navigation}
                isDoctor={isDoctor}
              />
            )}
          />
        </View>
      </Container>
    </Layout>
  );
};

const Renderer = ({ id, participant, name, navigation , isDoctor}) => {
  return (
    <Card
      onPress={() => {
        navigation.navigate("chat", { userName: participant.name, roomId: id });
      }}
    >
      <UserInfo>
        {isDoctor?null:<UserImgWrapper>
          <UserImg source={{ uri: participant.DoctorId.image }}></UserImg>
        </UserImgWrapper>}
        <TextSection>
          <UserInfoText>
            <UserName>{participant.name}</UserName>
            {isDoctor?null:<PostTime>{participant.DoctorId.degree}</PostTime>}
          </UserInfoText>
          <MessageText>{name}</MessageText>
        </TextSection>
      </UserInfo>
    </Card>
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

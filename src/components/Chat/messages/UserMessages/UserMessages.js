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
import { useNavigation } from "@react-navigation/native";
import { IconButton, Avatar } from "react-native-paper";
import colors from "../../../../assets/colors/colors";
const UserMessages = (props) => {
  const [messages, setMessages] = useState(null);
  const [isDoctor, setisDoctor] = useState(props.isDoctor);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, [isDoctor]);

  const fetchData = () => {
    AsyncStorage.getItem("@user_token")
      .then(async (token) => {
        await axios_base
          .get("/user_data" + token)
          .then((user) => {
            setMessages(user.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout fetcherData={() => fetchData()}>
      <Container>
        <Greet topic={"Your Chat Box"} />
        <View>
          <FlatList
            data={messages?.MessageRooms}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Renderer
                id={item._id}
                participant={
                  item.participants ? item.participants[isDoctor ? 0 : 1] : null
                }
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

const Renderer = ({ id, participant, name, navigation, isDoctor }) => {
  return (
    <Card
      onPress={() => {
        navigation.navigate("chat", {
          userName: participant?.name,
          roomId: id,
        });
      }}
    >
      <UserInfo>
        {
          <UserImgWrapper>
            {!isDoctor ? (
              <UserImg source={{ uri: participant?.DoctorId.image }}></UserImg>
            ) : (
              <Avatar.Text
                label={
                  participant.name[0].toUpperCase() +
                  "" +
                  participant.name.split(" ")[1][0].toUpperCase()
                }
                size={40}
              />
            )}
          </UserImgWrapper>
        }
        <TextSection>
          <UserInfoText>
            <UserName>{participant?.name}</UserName>
            {isDoctor ? null : (
              <PostTime>{participant?.DoctorId.degree}</PostTime>
            )}
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

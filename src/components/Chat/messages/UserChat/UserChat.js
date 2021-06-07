import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../../../assets/colors/colors";
import { user } from "../../../../assets/image/images";
import ChatHeading from "./ChatHeading.js";
import axios from "../../../../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Pusher from 'pusher-js/react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const UserChat = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    fetchUserId();
    fetchUserToken();
    fetchMessages();
  }, [userToken]);

  useEffect(() =>{
    const pusher = new Pusher('402af01c65c08ef73afd', {
      cluster: 'ap2'
    });
    
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([data,...messages])
    });
    return ()=>{
      channel.unbind_all()
      channel.unsubscribe
    }
  },[messages])

  const fetchUserId = () => {
    AsyncStorage.getItem("@user_id")
      .then((id) => {
        setUserId(id);
      })
      .catch((error) => {
        Alert.alert(
          "Check your Internet! ",
          "Login again" + error[{ text: "OK", onPress: () => {} }]
        );
      });
  };

  const fetchUserToken = () => {
    AsyncStorage.getItem("@user_token")
      .then((token) => {
        setUserToken(token);
      })
      .catch((error) => {
        Alert.alert(
          "Check your Internet! ",
          "Login again could not get a valiid token" +
            error[{ text: "OK", onPress: () => {} }]
        );
      });
  };

  const fetchMessages = () => {
    axios.get("/getmessage" + route.params.roomId).then((response) => {
      const meg = response.data?.map((keys, values) => {
        let messagefetched = {
          _id: keys._id,
          text: keys.message,
          createdAt: new Date(keys.timestamp),
          user: {
            _id: keys.user._id,
            name: keys.user.name,
            avatar: keys.user.DoctorId?.image,
          },
        };
        return messagefetched;
      });
      setMessages(meg);
    });
  };

  const onSend = useCallback((messages = [],token) => {
    axios
      .post("/newmessage" + token, {
        message: messages[0].text,
        room: route.params.roomId,
      })
      .then((response) => {
        if (response.data === "success") {
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
          );
        } else if (response.data === "error") {
          Alert.alert("Server Error", "Server Posting Error", [
            { text: "OK", onPress: () => {} },
          ]);
        }
      })
      .catch((error) => {
        Alert.alert(
          "Internet Error",
          "There is an error on posting your message login and try again",
          [{ text: "OK", onPress: () => {} }]
        );
      });
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={30}
            color={colors.red}
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.green,
            padding: 2,
          },
        }}
        textStyle={{
          right: {
            color: colors.white,
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <Icon name="caretdown" size={20} color={colors.red}></Icon>
  };

  return (
    <>
      <ChatHeading topic={route.params.userName} />
      <GiftedChat
        messages={messages}
        onSend={(message) => onSend(message,userToken)}
        user={{
          _id: userId,
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </>
  );
};

export default UserChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

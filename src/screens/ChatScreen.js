import React from "react";
import ChatCategory from "../components/Chat/ChatCategory.js";
import Layout from "./Layout.js";
import { View, StyleSheet } from "react-native";
import colors from "../assets/colors/colors.js";
const ChatScreen = (props) => {
  return <ChatCategory {...props} />;
};

export default ChatScreen;

import React from "react";
import { View, StyleSheet } from "react-native";
import Layout from "../../screens/Layout";
import Card from "./CategoryCard";
import ChatHeading from "./ChatHeading.js";

const ChatCategory = () => {
  return (
    <Layout cart={false}>
      <ChatHeading topic="Chat Category" />
      <View style={styles.half_spaces}>
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
      </View>
      <View style={styles.half_spaces}>
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
      </View>
      <View style={styles.half_spaces}>
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
        <Card
          title={"hello"}
          source={
            "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
          }
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  half_spaces: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ChatCategory;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeadingCard from "./HeadingCard";
const ContentHome = ({ Messages }) => {
  return (
    <>
      <View>
        <HeadingCard
          path="covid"
          title={Messages[0]}
          source={
            "https://www.skincancer.org/wp-content/uploads/Screen-Shot-2020-10-27-at-12.22.53-PM-1024x548.png"
          }
        />
        <View style={styles.half_space}>
          <HeadingCard
            path="Chat"
            title={Messages[1]}
            source={
              "https://i.pinimg.com/736x/7f/77/5f/7f775f965134ccf28f451526df3f8e1e.jpg"
            }
          />
          <HeadingCard
            path="covid"
            title={Messages[2]}
            source={
              "https://img.graphicsurf.com/2020/09/people-in-pharmacy-vector-illustration.jpg"
            }
          />
        </View>
        <HeadingCard
          path="appointment"
          title={Messages[3]}
          source={
            "https://img.freepik.com/free-vector/events-concept-illustration_114360-931.jpg?size=626&ext=jpg&ga=GA1.2.1449299337.1618790400"
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  half_space: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ContentHome;

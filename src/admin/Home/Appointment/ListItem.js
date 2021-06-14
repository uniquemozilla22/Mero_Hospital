import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Avatar } from "react-native-paper";
import colors from "../../../assets/colors/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const ListItem = ({ appointment, onOpen, index }) => {
  const { name, image } = appointment.feild;
  const username = appointment.user.name;
  const { date } = appointment;

  return (
    <>
      <TouchableOpacity onPress={() => onOpen(index)}>
        <Card style={styles.container}>
          <Card.Title
            title={<Text style={styles.title}>{username}</Text>}
            subtitle={
              <Text style={styles.subtitle}>
                {new Date(date).toDateString()}
              </Text>
            }
            left={(props) => (
              <Avatar.Image {...props} size={40} source={{ uri: image }} />
            )}
            right={(props) => (
              <AntDesign
                name={"caretdown"}
                color={colors.red}
                size={20}
              ></AntDesign>
            )}
          />
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    color: colors.grey,
    fontSize: 12,
  },
});

export default ListItem;

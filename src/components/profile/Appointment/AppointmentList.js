import React, { useState, useRef, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";
import colors from "../../../assets/colors/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const AppointmentList = ({ data, Click, expired }) => {
  console.log(typeof expired);
  return (
    <Card style={styles.cards}>
      <Card.Title
        style={styles.title}
        title={
          expired ? (
            <Text style={styles.exptitle}>{data.feild.name}</Text>
          ) : (
            <Text style={styles.title}>{data.feild.name}</Text>
          )
        }
        subtitle={
          expired ? (
            <Text style={styles.expsubtitle}>
              {new Date(data.date).toLocaleString()}
            </Text>
          ) : (
            <Text style={styles.subtitle}>
              {new Date(data.date).toLocaleString()}
            </Text>
          )
        }
        left={(props) => (
          <Avatar.Image
            source={{ uri: data?.feild?.image }}
            {...props}
            size={30}
          />
        )}
        right={(props) => (
          <AntDesign icon={"down"} color={colors.green} size={24} {...props} />
        )}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  cards: {
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: colors.grey,
  },
  exptitle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "600",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  expsubtitle: {
    color: colors.grey,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default AppointmentList;

import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Avatar, Title, Caption, Text } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../../assets/colors/colors";

const SingleProfile = ({ data, delete_appointment }) => {
  return data ? (
    <>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: data.feild?.image,
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  color: colors.black,
                  marginBottom: 5,
                },
              ]}
            >
              {data.feild.name}
            </Title>
            <Caption
              style={
                (styles.caption,
                {
                  color: colors.black,
                })
              }
            >
              {new Date(data.date) <= new Date() ? (
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  {new Date(data.date).toLocaleString() + " expired"}
                </Text>
              ) : (
                <Text>{new Date(data.date).toLocaleString()}</Text>
              )}
            </Caption>
          </View>
        </View>
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity onPress={() => delete_appointment(data._id)}>
          <View style={styles.menuItem}>
            <Icon name="delete" color={colors.green} size={25} />
            <Text style={styles.menuItemText}> Delete Appointment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <ActivityIndicator size="large" />
  );
};

const styles = StyleSheet.create({
  button_container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  infoBoxWrapper: {
    borderBottomColor: colors.greengrey,
    borderBottomWidth: 1,
    borderTopColor: colors.greengrey,
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    borderWidth: 2,
    borderColor: colors.green,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  menuItemText: {
    color: colors.green,
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default SingleProfile;

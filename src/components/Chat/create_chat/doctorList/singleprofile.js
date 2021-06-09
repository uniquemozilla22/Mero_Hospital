import React from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Title, Caption, Text } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../../../assets/colors/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SingleProfile = ({ data, createChat }) => {
  return (
    <>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: data.DoctorId?.image,
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
              {data.isDoctor ? "Dr." + data.name : data.name}
            </Title>
            <Caption
              style={
                (styles.caption,
                {
                  color: colors.black,
                })
              }
            >
              {"@" + data.username}
            </Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color={colors.green} size={20} />
          <Text style={{ color: colors.black, marginLeft: 20 }}>
            {data.address + " , Nepal"}
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="category" color={colors.green} size={20} />
          <Text style={{ color: colors.black, marginLeft: 20 }}>
            {data.categoryId?.name}
          </Text>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <MaterialIcons name="school" color={colors.green} size={20} />
          <Text style={{ color: colors.black, marginLeft: 20 }}>
            {data.DoctorId?.degree +
              ", " +
              data.DoctorId?.experience +
              " years"}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color={colors.green} size={20} />
          <Text style={{ color: colors.black, marginLeft: 20 }}>
            {data.email}
          </Text>
        </View>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={() => createChat()}>
          <View style={styles.menuItem}>
            <Icon name="message" color={colors.white} size={25} />
            <Text style={styles.menuItemText}>Message Him</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={
              (styles.menuItem,
              {
                backgroundColor: colors.white,
                flexDirection: "row",
                paddingVertical: 15,
                paddingHorizontal: 30,
                borderRadius: 15,
              })
            }
          >
            <Icon name="message-outline" color={colors.green} size={25} />
            <Text
              style={
                (styles.menuItemText, { color: colors.green, marginLeft: 10 })
              }
            >
              See More
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
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
    fontSize: 24,
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
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: colors.green,
    borderRadius: 20,
  },
  menuItemText: {
    color: colors.white,
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default SingleProfile;

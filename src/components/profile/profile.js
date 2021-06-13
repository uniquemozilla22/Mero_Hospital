import React from "react";

import { View, StyleSheet } from "react-native";
import { Avatar, Title, Caption, Text } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../assets/colors/colors";

const Profile = ({ data }) => {
  return (
    <>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          {data.DoctorId?.image ? (
            <Avatar.Image
              source={{
                uri: data.DoctorId.image,
              }}
              size={80}
            />
          ) : (
            <Avatar.Text
              label={
                data.name[0].toUpperCase() +
                "" +
                data.name.split(" ")[1][0].toUpperCase()
              }
              size={80}
            />
          )}
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                  color: colors.black,
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
            {data.address}
          </Text>
        </View>
        {data.phone ? (
          <View style={styles.row}>
            <Icon name="phone" color={colors.green} size={20} />
            <Text style={{ color: colors.black, marginLeft: 20 }}>
              {data.phone}
            </Text>
          </View>
        ) : null}
        <View style={styles.row}>
          <Icon name="email" color={colors.green} size={20} />
          <Text style={{ color: colors.black, marginLeft: 20 }}>
            {data.email}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
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
    marginBottom: 10,
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
  },
  menuItemText: {
    color: colors.black,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Profile;

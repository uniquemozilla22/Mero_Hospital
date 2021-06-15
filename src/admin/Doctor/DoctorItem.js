import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Avatar } from "react-native-paper";
import colors from "../../assets/colors/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const DoctorItem = ({ data, onOpen, index }) => {
  return (
    <>
      <TouchableOpacity onPress={() => onOpen(index)}>
        <Card style={styles.container}>
          <Card.Title
            title={<Text style={styles.title}>{data.name}</Text>}
            subtitle={
              <Text style={styles.subtitle}>{data.categoryId.name}</Text>
            }
            left={(props) => (
              <Avatar.Image
                {...props}
                size={40}
                source={{ uri: data.DoctorId.image }}
              />
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

export default DoctorItem;

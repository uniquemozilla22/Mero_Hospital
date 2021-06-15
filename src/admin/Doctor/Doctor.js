import React, { useRef, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../screens/Layout";
import DoctorItem from "./DoctorItem";
import { Modalize } from "react-native-modalize";
import SingleDoctor from "./SingleDoctor";
import Heading from "./Heading";

const Doctor = ({ data }) => {
  const [index, setIndex] = useState(null);
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const onOpen = (i) => {
    setIndex(i);
    modalizeRef.current?.open();
  };
  const logout = () => {
    AsyncStorage.removeItem("@user_data");
    AsyncStorage.removeItem("@user_id");
    AsyncStorage.removeItem("@user_token")
      .then(() => {
        navigation.navigate("login");
      })
      .catch((error) => {
        navigation.navigate("login");
      });
  };
  return data ? (
    <Layout>
      <Heading topic="Hospital Doctors" />
      <View style={{ minHeight: 650 }}>
        {Object.keys(data).map((index) => (
          <DoctorItem
            key={data[index]._id}
            data={data[index]}
            onOpen={onOpen}
            index={index}
          />
        ))}
      </View>
      <Modalize
        ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        closeOnOverlayTap
        modalHeight={500}
      >
        <SingleDoctor data={data[index]} feild={data[index]?.categoryId.name} />
      </Modalize>
    </Layout>
  ) : (
    <ActivityIndicator size="large" />
  );
};

export default Doctor;

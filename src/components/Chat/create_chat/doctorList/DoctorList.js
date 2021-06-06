import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import {
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import colors from "../../../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import axios_base from "../../../../data/axios";
import DoctorItem from "./DoctorItem";
import Heading from "./Heading.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = ({ route }) => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);

  const { title, source, categoryId } = route.params;

  const fetchCategoryDoctors = () => {
    AsyncStorage.getItem("@user_token")
      .then((token) => {
        axios_base
          .get("/fetchdoctor" + categoryId)
          .then((response) => {
            setToken(token);
            setData(response.data);
          })
          .catch((error) => {
            Alert.alert(
              "No Internet Service! ",
              "Server Errors:" + error[{ text: "OK", onPress: () => {} }]
            );
          });
        console.log(data);
      })
      .catch((error) => {
        Alert.alert(
          "Session not available try again",
          "Login Again" + error[{ text: "OK", onPress: () => {} }]
        );
      });
  };

  useEffect(() => {
    fetchCategoryDoctors();
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={{
          uri: source,
        }}
      >
        <StatusBar background={colors.green} barStyle="light-content" />
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.text_header}>
            <Icon name={"chevron-left"} size={20} /> {title}
          </Text>
        </TouchableOpacity>
        <Animatable.View
          animation="fadeInUpBig"
          style={[
            styles.footer,
            {
              backgroundColor: colors.white,
            },
          ]}
        >
          <Heading />
          {data ? (
            Object.keys(data).map((keys, value) => 
              <DoctorItem key={keys} token={token} data={data[keys]} />
            )
          ) : (
            <ActivityIndicator size={"large"} />
          )}
        </Animatable.View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "rgba(0,0,0,0.38)",
    flex: 1,
    paddingHorizontal: 10,
    top: 0,
  },
  footer: {
    backgroundColor: colors.green,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    bottom: 0,
    opacity:1

  },
  text_header: {
    color: colors.greengrey,
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10
  },
  text_header_message: {
    color: "#fff",
    fontSize: 16,
  },
  text_footer: {
    color: colors.white,
    fontSize: 20,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.red,
    paddingBottom: 5,
  },
  textInput: {
    marginVertical: 10,
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    padding: 10,
    color: colors.white,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  errorMsg: {
    color: colors.red,
    fontSize: 14,
  },
  button: {
    alignItems: "center",
  },
  signIn: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  socialLogin: {
    flexDirection: "row",
    height: 15,
  },
});

export default EditProfile;

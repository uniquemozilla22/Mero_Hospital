import React, { useState, useEffect } from "react";
import Layout from "../../../screens/Layout";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  Linking,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import colors from "../../../assets/colors/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import axios_base from "../../../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = ({ route }) => {
  const navigation = useNavigation();

  const [data, setData] = useState({
    name: "",
    email: "",
    submittable: false,
    errorEmail: null,
  });
  const [nameEdit, setNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");

  const nameInput = (val) => {
    setNameEdit(val);
    setData({ ...data, name: val, errorName: null, submittable: true });
  };

  const emailInput = (val) => {
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        val
      )
        ? true
        : false;

    if (validEmail) {
      setEmailEdit(val);
      setData({ ...data, email: val, errorEmail: null, submittable: true });
    } else {
      setData({ ...data, errorEmail: "Email Format not correct" });
    }
  };

  const handleNameEditing = (name) => {
    name = name.trim();
    if (name !== "") {
      setData({ ...data, name: name, errorName: null, submittable: true });
    } else {
      setData({
        ...data,
        name: route.params.userData.name,
        submittable: false,
      });
    }
  };

  const handleEmailAddress = (val) => {
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        val
      )
        ? true
        : false;

    if (validEmail) {
      setEmailEdit(val);
      setData({
        ...data,
        email: emailEdit,
        errorEmail: null,
        submittable: true,
      });
    } else if (val === "") {
      setData({
        ...data,
        errorEmail: null,
        submittable: true,
        email: route.params.userData.email,
      });
    } else {
      setData({
        ...data,
        errorEmail: "Email Format not correct",
        submittable: false,
        email: route.params.userData.email,
      });
    }
  };

  const onSubmitHandler = () => {
    AsyncStorage.getItem("@user_token")
      .then(async (token) => {
        const userInfo = data;
        if (userInfo.name === "") {
          userInfo.name = route.params.userData.name;
        }
        if (userInfo.email === "") {
          userInfo.email = route.params.userData.email;
        }
        axios_base
          .post("/editprofile" + token, { data })
          .then((response) => {
            if (response.data.success) {
              Alert.alert(
                "Data Posted Sucessfully",
                response.data.success,

                [{ text: "OK", onPress: () => {} }]
              );
            } else {
              Alert.alert(
                "Internet Error Data not Posted",
                response.data.error,

                [{ text: "OK", onPress: () => {} }]
              );
            }
          })
          .catch((error) => {
            Alert.alert(
              "Internet Error Data not Posted",
              error,

              [{ text: "OK", onPress: () => {} }]
            );
          });
      })
      .catch((error) => {
        Alert.alert(
          "Please Login and Try again",

          [{ text: "OK", onPress: () => {} }]
        );
      });
  };

  return data ? (
    <>
      <ImageBackground
        style={styles.container}
        source={{
          uri: "https://www.creativefabrica.com/wp-content/uploads/2019/12/18/Web-Sign-in-Edit-Profile-Illustration-Graphics-1.jpg",
        }}
      >
        <StatusBar background={colors.green} barStyle="light-content" />
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.text_header}>
            <Icon name={"chevron-left"} size={20} /> Back
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
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.black,
                fontWeight: "bold",
              },
            ]}
          >
            Name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.black} size={20} />
            <TextInput
              placeholder={route.params.userData.name}
              style={[
                styles.textInput,
                {
                  color: colors.black,
                },
              ]}
              autoCapitalize="none"
              defaultValue={route.params.userData.name}
              showSoftInputOnFocus={true}
              onChangeText={(value) => nameInput(value)}
              onEndEditing={(e) => handleNameEditing(e.nativeEvent.text)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.black,
                fontWeight: "bold",
              },
            ]}
          >
            Email
          </Text>
          <View style={styles.action}>
            <Feather name="mail" color={colors.green} size={20} />
            <TextInput
              defaultValue={route.params.userData.email}
              placeholder={route.params.userData.email}
              keyboardType="email-address"
              autoCompleteType="email"
              style={[
                styles.textInput,
                {
                  color: colors.black,
                },
              ]}
              autoCapitalize="none"
              onChangeText={emailInput}
              onEndEditing={(e) => handleEmailAddress(e.nativeEvent.text)}
            />
          </View>
          {data.errorEmail ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{data.errorEmail}</Text>
            </Animatable.View>
          ) : null}
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                width: "100%",
                backgroundColor: data.submittable
                  ? colors.green
                  : colors.greengrey,
              },
            ]}
            onPress={data.submittable ? () => onSubmitHandler() : {}}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.white,
                },
              ]}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </>
  ) : (
    <ActivityIndicator size="large" color={colors.green} />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  header: {
    flex: 1,
    paddingHorizontal: 10,
    top: 0,
  },
  footer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    bottom: 0,
  },
  text_header: {
    color: colors.green,
    fontWeight: "bold",
    fontSize: 20,
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

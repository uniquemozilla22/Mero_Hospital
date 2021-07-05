import React, { useRef } from "react";
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
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors/colors";
import Axios from "../../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modalize } from "react-native-modalize";
import axios_base from "../../data/axios";
import { ActivityIndicator } from "react-native-paper";

const SignInScreen = ({ navigation, route }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    errorMessagePw: null,
    routeMessage: null,
    registerMessage: null,
    userMessage: null,
    LoginMessage: null,
  });

  const [forgetEmail, setForgetEmail] = React.useState({
    email: "",
    isValidEmail: false,
    forgetEmailMessage: null,
    loader: false,
  });

  const modalizeref = useRef(null);

  const onOpen = () => {
    modalizeref.current?.open();
  };

  const textInputChange = (val) => {
    setData({ ...data, username: val });
  };

  const handlePasswordChange = (val) => {
    const hasNumber = /\d/.test(val) ? true : false;
    const hasSixCharacters = val.length >= 6 ? true : false;
    if (hasNumber && hasSixCharacters) {
      setData({
        ...data,
        isValidPassword: true,
        password: val,
        errorMessagePw: null,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
        errorMessagePw:
          "Password must have at least 6 letters including numbers",
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({ ...data, secureTextEntry: !data.secureTextEntry });
  };

  const handleForgotEmail = (val) => {
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        val
      )
        ? true
        : false;

    if (validEmail) {
      setForgetEmail({
        ...data,
        isValidEmail: true,
        forgetEmailMessage: null,
        email: val,
      });
    } else {
      setForgetEmail({
        ...data,
        isValidEmail: false,
        forgetEmailMessage: "The email Format is incorrect",
      });
    }
  };

  const sendEmailforgetpassword = () => {
    setForgetEmail({ ...forgetEmail, loader: true });

    if (forgetEmail.email.trimEnd() === "") {
      setForgetEmail({
        ...forgetEmail,
        forgetEmailMessage: "The email is not entered",
        loader: false,
      });
    } else {
      axios_base
        .post("/forgetpassword", { email: forgetEmail.email })
        .then((response) => {
          if (response.data === "nodatafound") {
            setForgetEmail({ ...forgetEmail, loader: false });

            Alert.alert(
              "The Email has not been found ",
              "The email you provided is not registered in the application",
              [
                {
                  text: "OK",
                  onPress: () =>
                    setForgetEmail({ ...forgetEmail, loader: false }),
                },
              ]
            );
          } else if (response.data === "success") {
            setForgetEmail({ ...forgetEmail, loader: false });

            Alert.alert(
              "Password OTP sent to your email ",
              "The password has been sent to your email address please check your email address to continue.",
              [{ text: "OK", onPress: () => {} }]
            );
          }
        })
        .catch((error) => {
          Alert.alert(
            "There has been some internet error in the application",
            "Please check your internet connection.",
            [{ text: "OK", onPress: () => {} }]
          );
        });
    }
  };

  const handleValidUser = (val) => {
    const hasSixCharacters = val.length >= 6 ? true : false;

    if (hasSixCharacters) {
      setData({ ...data, isValidUser: true, userMessage: null });
    } else {
      setData({
        ...data,
        isValidUser: false,
        userMessage: "Username must be of 6 characters",
      });
    }
  };

  const loginHandle = (username, password) => {
    if (
      username !== "" &&
      password !== "" &&
      data.isValidUser &&
      data.isValidPassword
    ) {
      setData({ ...data, LoginMessage: null });

      checkUser(username, password);
    } else {
      setData({
        ...data,
        LoginMessage: "The authorization forms are not valid.",
      });
    }
  };

  const checkUser = (username, password) => {
    setData({ ...data, LoginMessage: null });

    Axios.post("/login", { username, password })
      .then((response) => {
        let { error, success } = response.data;

        if (error.username) {
          setData({ ...data, isValidUser: false, userMessage: error.username });
        } else if (error.password) {
          setData({
            ...data,
            isValidPassword: false,
            errorMessagePw: error.password,
          });
        } else if (success) {
          try {
            AsyncStorage.removeItem("@user_token");
            AsyncStorage.removeItem("@user_data");
            AsyncStorage.removeItem("@user_id");
            AsyncStorage.setItem("@user_token", success.token);
            AsyncStorage.setItem("@user_data", JSON.stringify(success.result));
            AsyncStorage.setItem("@user_id", success.result._id);

            success.result.isAdmin
              ? navigation.navigate({ name: "admin" })
              : navigation.navigate({ name: "application" });
          } catch (e) {
            console.log(e);
          }
        }
      })
      .catch((err) => {
        setData({ ...data, LoginMessage: "err" + err });
      });
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome Back!</Text>
          {route.params === undefined ? null : (
            <Text style={styles.text_header_message}>
              {route.params.registerMessage}
            </Text>
          )}
        </View>
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
            Username
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.black} size={20} />
            <TextInput
              placeholder="Your Username"
              style={[
                styles.textInput,
                {
                  color: colors.black,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
              onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{data.userMessage}</Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.black,
                marginTop: 15,
                fontWeight: "bold",
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={colors.black} size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor={colors.grey}
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.black,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={colors.grey} size={20} />
              ) : (
                <Feather name="eye" color={colors.grey} size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              {data.errorMessagePw !== null ? (
                <Text style={styles.errorMsg}>{data.errorMessagePw}</Text>
              ) : null}
            </Animatable.View>
          )}

          <TouchableOpacity onPress={() => onOpen()}>
            <Text style={{ color: colors.grey, marginVertical: 15 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          {data.LoginMessage !== null ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{data.LoginMessage}</Text>
            </Animatable.View>
          ) : null}
          <View style={styles.button}>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  width: "100%",
                },
              ]}
              onPress={() => loginHandle(data.username, data.password)}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.white,
                  },
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("signup");
              }}
              style={[
                styles.signIn,
                {
                  backgroundColor: colors.white,
                  borderColor: colors.green,
                  borderWidth: 1,
                  marginVertical: 15,
                  width: "100%",
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.green,
                  },
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
      <Modalize ref={modalizeref} adjustToContentHeight={true}>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.black,
              margin: 15,
              fontWeight: "bold",
            },
          ]}
        >
          Email
        </Text>
        <View
          style={[
            styles.action,
            {
              margin: 15,
            },
          ]}
        >
          <Feather name="lock" color={colors.black} size={20} />
          <TextInput
            placeholder="Your Registered Email"
            placeholderTextColor={colors.grey}
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handleForgotEmail(val)}
          />
        </View>
        {forgetEmail.forgetEmailMessage ? (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={[styles.errorMsg, { marginHorizontal: 15 }]}>
              {forgetEmail.forgetEmailMessage}
            </Text>
          </Animatable.View>
        ) : null}
        <TouchableOpacity
          onPress={() => sendEmailforgetpassword()}
          style={[
            styles.signIn,
            {
              backgroundColor: colors.white,
              borderColor: colors.green,
              borderWidth: 1,
              marginVertical: 15,
              width: "100%",
            },
          ]}
        >
          {forgetEmail.loader ? (
            <ActivityIndicator size={"small"} />
          ) : (
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.green,
                },
              ]}
            >
              Send Password to E-mail
            </Text>
          )}
        </TouchableOpacity>
      </Modalize>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
  },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    bottom: 0,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_header_message: {
    color: "#fff",
    fontSize: 16,
  },
  text_footer: {
    color: colors.white,
    fontSize: 18,
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

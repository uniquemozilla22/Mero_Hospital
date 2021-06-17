import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import colors from "../../../assets/colors/colors";
import Layout from "../../../screens/Layout";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Heading from "./Heading";
import { Picker } from "@react-native-picker/picker";
import { ActivityIndicator, Avatar } from "react-native-paper";
import axios_base from "../../../data/axios";

const AddDoctor = ({ category, token }) => {
  const [data, setData] = useState({
    categoryId: null,
    name: null,
    phone: null,
    email: null,
    city: null,
    username: null,
    password: null,
    image: null,
    degree: null,
    experience: null,
    secureTextEntry: true,
    isValidEmail: false,
    isValidPassword: false,
    isValidUser: false,
    isValidPhone: false,
    erroruserMessage: null,
    errorMessageEmail: null,
    errorMessagePhone: null,
    errorMessagePw: null,
    submitMessage: null,
  });

  const PostData = (doctorData) => {
    axios_base
      .post("/adddoctor" + token, { doctorData })
      .then((response) => {
        if (response.data === "success") {
          setData({
            ...data,
            submitMessage: "Doctor Has Been Added",
          });
        } else if (response.data === "error") {
          setData({
            ...data,
            submitMessage: "There is a Server Error.",
          });
        }
      })
      .catch((error) => {
        Alert.alert(
          "No Internet Connection",
          "There is no Internet Connection:" + error,
          [
            {
              text: "Try Again",
              onPress: () => {},
            },
            { text: "cancel", onPress: () => {} },
          ]
        );
        setData({
          ...data,
          submitMessage: "There is a network Error.",
        });
      });
  };

  const handleSubmit = () => {
    if (!data.name) {
      setData({ ...data, submitMessage: "Please enter a correct name." });
    } else if (!data.categoryId) {
      setData({ ...data, submitMessage: "Please Select a Category." });
    } else if (!data.city) {
      setData({ ...data, submitMessage: "Please Enter a City." });
    } else if (!data.username || !data.isValidUser) {
      setData({ ...data, submitMessage: "Please Enter a Valid Username" });
    } else if (!data.password || !data.isValidPassword) {
      setData({ ...data, submitMessage: "Please Enter a Valid Password" });
    } else if (!data.email || !data.isValidEmail) {
      setData({ ...data, submitMessage: "Please Enter a Valid Email" });
    } else if (!data.phone || !data.isValidPhone) {
      setData({ ...data, submitMessage: "Please Enter a Valid Phone Number" });
    } else if (!data.image) {
      setData({ ...data, submitMessage: "Please Enter a Valid Image" });
    } else if (!data.degree) {
      setData({ ...data, submitMessage: "Please Enter Degree of the Doctor" });
    } else if (!data.experience) {
      setData({
        ...data,
        submitMessage: "Please Enter the Experience of the doctor",
      });
    } else {
      PostData(data);
    }
  };

  const handleValidUser = (val) => {
    const hasSixCharacters = val.length >= 6 ? true : false;

    if (hasSixCharacters) {
      setData({
        ...data,
        username: val,
        isValidUser: true,
        erroruserMessage: null,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
        erroruserMessage: "Username must be of 6 characters",
      });
    }
  };
  const handlePhoneChange = (val) => {
    if (val.length !== 10) {
      setData({
        ...data,
        isValidPhone: false,
        errorMessagePhone: "Not a Valid Phone Number",
      });
    } else {
      setData({
        ...data,
        phone: val,
        isValidPhone: true,
        errorMessagePhone: null,
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
      setData({
        ...data,
        isValidEmail: true,
        errorMessageEmail: null,
        email: val,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
        errorMessageEmail: "The email Format is incorrect",
      });
    }
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
  return token ? (
    <Layout fetcherData={() => {}}>
      <Heading topic="Add Doctor" />
      <View style={styles.container}>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.black,
              fontWeight: "bold",
            },
          ]}
        >
          Pick A Category
        </Text>
        <View style={styles.action}>
          <MaterialIcons name="category" color={colors.green} size={20} />
          {category ? (
            <Picker
              style={[
                styles.textInput,
                {
                  color: colors.black,
                  minHeight: 50,
                },
              ]}
              selectedValue={data.categoryId}
              onValueChange={(itemValue, itemIndex) =>
                setData({ ...data, categoryId: itemValue })
              }
            >
              {Object.keys(category).map((index) => (
                <Picker.Item
                  key={category[index]._id}
                  label={category[index].name.toUpperCase()}
                  value={category[index]._id}
                />
              ))}
            </Picker>
          ) : (
            <ActivityIndicator size="small" />
          )}
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
          Name
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.green} size={20} />
          <TextInput
            placeholder="Your Name"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setData({ ...data, name: val })}
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
          Phone
        </Text>
        <View style={styles.action}>
          <Feather name="phone" color={colors.green} size={20} />
          <TextInput
            placeholder="Your Phone Number"
            keyboardType="number-pad"
            autoCompleteType="tel"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(e) => handlePhoneChange(e)}
          />
        </View>
        {data.isValidPhone ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{data.errorMessagePhone}</Text>
          </Animatable.View>
        )}
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
            placeholder="Your Email"
            keyboardType="email-address"
            autoCompleteType="email"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handleEmailAddress(val)}
          />
        </View>
        {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{data.errorMessageEmail}</Text>
          </Animatable.View>
        )}
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.black,
              fontWeight: "bold",
            },
          ]}
        >
          City
        </Text>
        <View style={styles.action}>
          <Feather name="home" color={colors.green} size={20} />
          <TextInput
            placeholder="Your City"
            autoCompleteType="street-address"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(e) => setData({ ...data, city: e })}
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
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.green} size={20} />
          <TextInput
            placeholder="Your Username"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handleValidUser(val)}
          />
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{data.erroruserMessage}</Text>
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
          <Feather name="lock" color={colors.green} size={20} />
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

          <TouchableOpacity
            onPress={() =>
              setData({
                ...data,
                secureTextEntry: !data.secureTextEntry,
              })
            }
          >
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={colors.grey} size={20} />
            ) : (
              <Feather name="eye" color={colors.grey} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{data.errorMessagePw}</Text>
          </Animatable.View>
        )}
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.black,
              fontWeight: "bold",
            },
          ]}
        >
          Image Address
        </Text>
        <View style={styles.action}>
          {data.image ? (
            <Avatar.Image source={{ uri: data.image }} size={100} />
          ) : (
            <FontAwesome name="photo" color={colors.green} size={20} />
          )}
          <TextInput
            placeholder="Image URL"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setData({ ...data, image: val })}
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
          Degree
        </Text>
        <View style={styles.action}>
          <IonIcons name="school-outline" color={colors.green} size={20} />
          <TextInput
            placeholder="Studied"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setData({ ...data, degree: val })}
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
          Experience (In Years)
        </Text>
        <View style={styles.action}>
          <MaterialIcons name="update" color={colors.green} size={20} />
          <TextInput
            placeholder="Work Experience"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setData({ ...data, experience: val })}
          />
        </View>
      </View>
      {data.submitMessage ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>{data.submitMessage}</Text>
        </Animatable.View>
      ) : null}
      <TouchableOpacity
        style={[
          styles.signIn,
          {
            width: "100%",
            marginVertical: 10,
          },
        ]}
        onPress={() => handleSubmit()}
      >
        <Text
          style={[
            styles.textSign,
            {
              color: colors.white,
            },
          ]}
        >
          Add Doctor
        </Text>
      </TouchableOpacity>
    </Layout>
  ) : (
    <ActivityIndicator size="large" />
  );
};

export default AddDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    height: 100,
    width: 100,
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
    fontSize: 14,
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

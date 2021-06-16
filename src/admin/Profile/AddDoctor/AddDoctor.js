import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../../assets/colors/colors";
import Layout from "../../../screens/Layout";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Heading from "./Heading";
import { Picker } from "@react-native-picker/picker";
import { ActivityIndicator } from "react-native-paper";

const AddDoctor = ({ category }) => {
  return (
    <Layout>
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
              //   selectedValue={selectedLanguage}
              //   onValueChange={(itemValue, itemIndex) =>
              //     setSelectedLanguage(itemValue)
              //   }
            >
              {Object.keys(category).map((index) => (
                <Picker.Item
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
            //   onChangeText={(val) => textInputChange(val)}
            //   onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
            //   onChangeText={(e) => handlePhoneChange(e)}
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
            // onEndEditing={(e) => handleEmailAddress(e.nativeEvent.text)}
            // onChangeText={(val) => handleEmailAddress(val)}
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
            // onChangeText={(e) => InputaddressChange(e)}
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
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>
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
            // secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            //   onChangeText={(val) => handlePasswordChange(val)}
          />

          {/* // <TouchableOpacity onPress={updateSecureTextEntry}>
            //   {data.secureTextEntry ? (
            //     <Feather name="eye-off" color={colors.grey} size={20} />
            //   ) : (
            //     <Feather name="eye" color={colors.grey} size={20} />
            //   )}
            // </TouchableOpacity> */}
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
          Image Address
        </Text>
        <View style={styles.action}>
          <FontAwesome name="photo" color={colors.green} size={20} />
          <TextInput
            placeholder="Image URL"
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            // onChangeText={(val) => inputChangeName(val)}
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
            // onChangeText={(val) => inputChangeName(val)}
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
            // onChangeText={(val) => inputChangeName(val)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.signIn,
          {
            width: "100%",
            marginVertical: 10,
          },
        ]}
        onPress={() => {
          registerHandle(
            data.username,
            data.password,
            data.email,
            data.name,
            data.address,
            data.phone
          );
        }}
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
  );
};

export default AddDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

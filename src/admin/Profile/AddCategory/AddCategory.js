import colors from "../../../assets/colors/colors";
import Layout from "../../../screens/Layout";
import Heading from "./Heading";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  DatePickerAndroid,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ActivityIndicator } from "react-native-paper";
import axios_base from "../../../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddCategory = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    image: "",
    errorName: null,
    errorDescription: null,
    errorImage: null,
    errorOnsubmit: null,
  });

  const [token, setToken] = useState(null);

  useEffect(() => {
    fetchToken();
  }, [token]);

  const fetchToken = () => {
    AsyncStorage.getItem("@user_token")
      .then((token) => setToken(token))
      .catch((error) =>
        Alert.alert(
          "No Internet Connection",
          "There is no Internet Connection. Please Logout and Try again",
          [
            {
              text: "Try Again",
              onPress: () => {},
            },
            { text: "cancel", onPress: () => {} },
          ]
        )
      );
  };

  const inputName = (e) => {
    if (e !== "") {
      setData({ ...data, name: e, errorName: null });
    } else {
      setData({ ...data, errorName: "Name Must Be Entered", name: e });
    }
  };

  const inputDescription = (e) => {
    e !== ""
      ? setData({ ...data, description: e, errorDescription: null })
      : setData({
          ...data,
          description: e,
          errorDescription: "Description Not Found",
        });
  };

  const inputImage = (e) => {
    e !== ""
      ? setData({ ...data, image: e, errorImage: null })
      : setData({
          ...data,
          image: e,
          errorImage: "There must be a Image Link",
        });
  };

  const handleSubmit = (name, description, image) => {
    if (data.errorDescription) {
      setData({ ...data, errorOnsubmit: data.errorDescription });
    } else if (data.errorImage) {
      setData({ ...data, errorOnsubmit: data.errorImage });
    } else if (data.errorImage) {
      setData({ ...data, errorOnsubmit: data.errorName });
    } else {
      axios_base
        .post("/addcategories" + token, { name, description, image })
        .then((response) => {
          if (response.data === "success") {
            Alert.alert(
              data.name + " added!",
              "The Category has been added to the application.",
              [
                { text: "Ok", onPress: () => handleSubmit(data) },
                {
                  text: "New Entry",
                  onPress: () =>
                    setData({
                      name: "",
                      description: "",
                      image: "",
                      errorName: null,
                      errorDescription: null,
                      errorImage: null,
                      errorOnsubmit: null,
                    }),
                },
              ]
            );
          }
        })
        .catch((error) =>
          Alert.alert(
            "No Internet Connection",
            "There is no Internet Connection. Please Logout and Try again",
            [
              { text: "Try Again", onPress: () => handleSubmit(data) },
              { text: "cancel", onPress: () => {} },
            ]
          )
        );
    }
  };

  return token ? (
    <Layout>
      <Heading topic="Add Category" />

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
        <MaterialIcons name="category" color={colors.green} size={20} />
        <TextInput
          placeholder="Name"
          style={[
            styles.textInput,
            {
              color: colors.black,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(val) => inputName(val)}
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
        Description
      </Text>
      <View style={styles.action}>
        <IonIcons name="list" color={colors.green} size={20} />
        <TextInput
          placeholder="Description"
          multiline={true}
          numberOfLines={4}
          style={[
            styles.textInput,
            {
              color: colors.black,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(val) => inputDescription(val)}
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
        Image
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
          onChangeText={(val) => inputImage(val)}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.signIn,
          {
            width: "100%",
            marginVertical: 10,
          },
        ]}
        onPress={() => handleSubmit(data.name, data.description, data.image)}
      >
        <Text
          style={[
            styles.textSign,
            {
              color: colors.white,
            },
          ]}
        >
          Add Category
        </Text>
      </TouchableOpacity>
    </Layout>
  ) : (
    <ActivityIndicator size="large" />
  );
};
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

export default AddCategory;

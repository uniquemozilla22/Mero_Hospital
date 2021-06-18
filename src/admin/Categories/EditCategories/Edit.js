import colors from "../../../assets/colors/colors";
import Layout from "../../../screens/Layout";
import Heading from "../Heading";
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
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ActivityIndicator, Avatar } from "react-native-paper";
import axios_base from "../../../data/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const EditCategory = ({ route }) => {
  const { description, image, name, _id } = route.params;
  const navigation = useNavigation();

  const [data, setData] = useState({
    _id,
    name,
    description,
    image,
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
    if (e !== "" || e !== name) {
      setData({ ...data, name: e, errorName: null });
    } else {
      setData({ ...data, errorName: "Name Must Be Entered", name: e });
    }
  };

  const inputDescription = (e) => {
    e !== "" || e !== description
      ? setData({ ...data, description: e, errorDescription: null })
      : setData({
          ...data,
          description: e,
          errorDescription: "Description Not Edited",
        });
  };

  const inputImage = (e) => {
    e !== "" || e !== image
      ? setData({ ...data, image: e, errorImage: null })
      : setData({
          ...data,
          image: e,
          errorImage: "There must be a Image Link",
        });
  };

  const handleSubmit = (d) => {
    if (data.errorDescription) {
      setData({ ...data, errorOnsubmit: data.errorDescription });
    } else if (data.errorImage) {
      setData({ ...data, errorOnsubmit: data.errorImage });
    } else if (data.errorImage) {
      setData({ ...data, errorOnsubmit: data.errorName });
    } else if (
      d.name === name &&
      d.description === description &&
      d.image == image
    ) {
      setData({ ...data, errorOnsubmit: "All the Data are same as before" });
    } else {
      updateData(d);
    }
  };

  const toggleDelete = (d) => {
    Alert.alert(
      "Are You Sure?",
      "The Category " + d.name + " will be removed",
      [
        {
          text: "Yes",
          onPress: () => deleteData(d),
        },
        { text: "cancel", onPress: () => {} },
      ]
    );
  };

  const deleteData = ({ _id }) => {
    axios_base
      .post("/delete_category" + token, { _id })
      .then((response) => {
        if (response.data === "success") {
          Alert.alert(
            "Data Deleted!",
            "The Data Has been deleted sucessfully",
            [
              {
                text: "Go to Categories",
                onPress: () => navigation.navigate("CategoryHome"),
              },
            ]
          );
          navigation.navigate("CategoryHome");
        } else if (response.data === "error") {
          setData({
            ...data,
            errorOnsubmit: "Data Not Deleted: Server Error",
          });
          Alert.alert(
            "Data Not Delleted!",
            "There is a Server Error So the data is not Deleted",
            [
              {
                text: "Try Again",
                onPress: () => toggleDelete(data),
              },
              { text: "cancel", onPress: () => {} },
            ]
          );
        }
      })
      .catch((error) => {
        Alert.alert(
          "Data Not Deleted!",
          "Please Check Your Internet Connection",
          [
            {
              text: "Try Again",
              onPress: () => toggleDelete(data),
            },
            { text: "cancel", onPress: () => {} },
          ]
        );
      });
  };

  const updateData = ({ name, description, image, _id }) => {
    axios_base
      .post("/edit_category" + token, { name, description, image, _id })
      .then((response) => {
        if (response.data === "success") {
          setData({ ...data, errorOnsubmit: "Data Submitted" });
        } else if (response.data === "error") {
          setData({
            ...data,
            errorOnsubmit: "Data Not Submitted: Server Error",
          });
          Alert.alert(
            "Data Not Submitted!",
            "There is a Server Error So the data is not updated",
            [
              {
                text: "Try Again",
                onPress: () => handleSubmit(data),
              },
              { text: "cancel", onPress: () => {} },
            ]
          );
        }
      })
      .catch((error) => {
        Alert.alert(
          "Data Not Submitted!",
          "Please Check Your Internet Connection",
          [
            {
              text: "Try Again",
              onPress: () => updateData(data),
            },
            { text: "cancel", onPress: () => {} },
          ]
        );
      });
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
          defaultValue={name}
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
          defaultValue={description}
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
        {data.image ? (
          <Avatar.Image source={{ uri: data.image }} size={80} />
        ) : (
          <FontAwesome name="photo" color={colors.green} size={20} />
        )}
        <TextInput
          defaultValue={image}
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
      {!data.errorOnsubmit ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>{data.errorOnsubmit}</Text>
        </Animatable.View>
      )}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.signIn,
            {
              width: "100%",
              marginVertical: 10,
            },
          ]}
          onPress={() => handleSubmit(data)}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: colors.white,
              },
            ]}
          >
            Edit Category
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.signIn,
            {
              width: "100%",
              marginVertical: 10,
              borderColor: colors.red,
              borderWidth: 2,
              backgroundColor: colors.white,
              flex: 1,
              alignContent: "center",
              padding: 0,
              marginHorizontal: 10,
            },
          ]}
          onPress={() => toggleDelete(data)}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: colors.red,
              },
            ]}
          >
            <Feather name={"delete"} size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  ) : (
    <ActivityIndicator size="large" />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    flex: 2,
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

export default EditCategory;

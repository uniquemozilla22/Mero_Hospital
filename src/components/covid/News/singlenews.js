import React from "react";
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
  AsyncStorage,
  ImageBackground
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icons from 'react-native-vector-icons/Entypo'
import colors from "../../../assets/colors/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Axios from '../../../data/axios'
import WidgetNews from "../News/widget";


const SingleNewsScreen = ({ navigation, route }) => {

let {data}= route.params

  return (
    <>
      <ImageBackground style={styles.container} source={{uri:data.image_url}}>
        <StatusBar background={colors.green} barStyle="light-content" />
        <TouchableOpacity style={styles.header} onPress={()=>navigation.goBack()}>
          <Text style={styles.text_header}><Icon name={"chevron-left"} size={20}/> Back</Text>
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
            {data.title}
          </Text>
          <TouchableOpacity>
            <Text style={{ color: colors.greengrey}}>
              {data.source}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: colors.greengrey, marginBottom: 15 }}>
              {data.updated_at.split("T")[0]}
            </Text>
            <Text
            style={[
              styles.text_footer,
              {
                color: colors.black,
                fontWeight: "bold",
                fontSize:14
              },
            ]}
          >
            {data.summary}
          </Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={{ color: colors.red, marginVertical: 15 }}>
                Read More...
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => {
                navigation.navigate("signup")
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
                Go to Site
              </Text>
            </TouchableOpacity>
            <WidgetNews/>
        </Animatable.View>
      </ImageBackground>
    </>
  );
};

export default SingleNewsScreen;

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
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  text_header_message:{
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

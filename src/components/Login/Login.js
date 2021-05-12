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
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Axios from '../../data/axios'


const SignInScreen = ({ navigation, route }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    errorMessagePw:null,
    routeMessage:null,
    registerMessage:null,
    userMessage:null,
    LoginMessage:null
  });


  const textInputChange = (val) => {
    setData({...data,username:val})
  };

  const handlePasswordChange = (val) => {
    const hasNumber = /\d/.test(val)?true : false
    const hasSixCharacters = val.length>=6?true : false
    if(hasNumber && hasSixCharacters)
    {
      setData({...data,isValidPassword:true,password:val,errorMessagePw:null})
    }
    else{
      setData({...data,isValidPassword:false,errorMessagePw:"Password must have at least 6 letters including numbers"})
    } 
  };

  const updateSecureTextEntry = () => {
    setData({...data,secureTextEntry:!data.secureTextEntry})
  };

  const handleValidUser = (val) => {
    const hasSixCharacters = val.length>=6?true : false

    if(hasSixCharacters)
    {
      setData({...data,isValidUser:true,userMessage:null})
    }
    else{
      setData({...data,isValidUser:false,userMessage:"Username must be of 6 characters"})

    }
  };

  const loginHandle = (username, password) => {
    if(username!=="" && password!==""  && data.isValidUser && data.isValidPassword)
    {
      setData({...data,LoginMessage:null})

      checkUser(username, password)

    }
    else{
      setData({...data,LoginMessage:"The authorization forms are not valid."})
    }
  };

  const checkUser = (username , password)=>{
    setData({...data,LoginMessage:null})
     Axios.post("/login",{username,password})
    .then(response => {
      let {error,success} = response.data
      
      if(error.username)
      {
        setData({...data,isValidUser:false,userMessage:errusername})
      }
      else if(error.password)
      {
        setData({...data,isValidPassword:false,errorMessagePw:errpassword})
      }
      else if (success.username && success.password){
        navigation.navigate("application")
      }
    })
    .catch(err=>{
      setData({...data,LoginMessage:("err",err)})

    })
    
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome Back!</Text>
          {route.params===undefined?null:<Text style={styles.text_header_message}>{route.params.registerMessage}</Text>}
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
              <Text style={styles.errorMsg}>
                {data.userMessage}
              </Text>
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
              {data.errorMessagePw!==null?(<Text style={styles.errorMsg}>
                {data.errorMessagePw}
              </Text>):null}
            </Animatable.View>
          )}

          <TouchableOpacity>
            <Text style={{ color: colors.grey, marginVertical: 15 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          {data.LoginMessage ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              {data.LoginMessage!==null?(<Text style={styles.errorMsg}>
                {data.LoginMessage}
              </Text>):null}
            </Animatable.View>
          )}
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
                Sign Up
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{ color: colors.grey, marginVertical: 15 }}>
                Use Alternatives
              </Text>
            </TouchableOpacity>
            <ScrollView styles={styles.socialLogin} horizontal>
              <TouchableOpacity
                onPress={() => {
                  console.log("pressed");
                }}
                style={[
                  styles.signIn,
                  {
                    backgroundColor: colors.white,
                    paddingHorizontal: 20,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: colors.red,
                    },
                  ]}
                >
                  <Icon name="google-plus" size={20} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("pressed");
                }}
                style={[
                  styles.signIn,
                  {
                    backgroundColor: colors.white,
                    paddingHorizontal: 20,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: colors.red,
                    },
                  ]}
                >
                  <Icon name="facebook" size={20} />
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Animatable.View>
      </View>
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
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_header_message:{
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

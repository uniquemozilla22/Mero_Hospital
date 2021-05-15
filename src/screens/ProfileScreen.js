import React from "react";
import { View, SafeAreaView, StyleSheet, AsyncStorage } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Layout from "./Layout";
import Profile from '../components/profile/profile'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import axios from "../data/axios";

const ProfileScreen = () => {

  const [userData, setUserData] = React.useState()

  
  React.useEffect(()=>{
    AsyncStorage.getItem("@user_token")
    .then(async (data) =>{
    await axios.get("/user_data"+data)
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
    
    })
    .catch(error=>{
      console.log(error)})
  },[])


  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        
        <Profile />
        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: colors.greengrey,
                borderRightWidth: 1,
              },
            ]}
          >
            <Title>₹140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon
                name="account-check-outline"
                color={colors.green}
                size={25}
              />
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="logout" color={colors.green} size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    </Layout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: colors.greengrey,
    borderBottomWidth: 1,
    borderTopColor: colors.greengrey,
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: colors.black,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

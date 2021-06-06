import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileHome from "../components/profile/ProfileHome";
import EditProfile from "../components/profile/EditProfile/EditProfile";
import Layout from "./Layout";

const Stack = createStackNavigator();

const ProfileScreen = (props) => {
  return (
    <>
      <Stack.Navigator initialRouteName="profilehome" headerMode="none">
        <Stack.Screen
          name="profilehome"
          children={() => (
            <Layout fetcherData={props.fetcherData}>
              <ProfileHome {...props} />
            </Layout>
          )}
        />
        <Stack.Screen name="profileedit" component={EditProfile} />
      </Stack.Navigator>
    </>
  );
};

export default ProfileScreen;

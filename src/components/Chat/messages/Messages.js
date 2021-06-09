import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserMessages from "./UserMessages/UserMessages";
import UserChat from "./UserChat/UserChat";

const Stack = createStackNavigator();

const Messages = (props) => {
  return (
    <Stack.Navigator initialRouteName="Messages" headerMode={"none"}>
      <Stack.Screen
        name="Messages"
        children={() => <UserMessages {...props} />}
      />
      <Stack.Screen
        name="chat"
        component={UserChat}
        options={({ route }) => ({
          title: route.params.userName,
        })}
      />
    </Stack.Navigator>
  );
};

export default Messages;

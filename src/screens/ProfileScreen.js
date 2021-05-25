import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ProfileHome from '../components/profile/ProfileHome'
import EditProfile from '../components/profile/EditProfile/EditProfile'

const Stack = createStackNavigator()

const ProfileScreen = (props) => {
  return (
    <>
      <Stack.Navigator initialRouteName="profilehome" headerMode="none">
          <Stack.Screen name="profilehome" children={()=><ProfileHome {...props}/>}/>
          <Stack.Screen name="profileedit" component={EditProfile}/>
        </Stack.Navigator>
    </>
  )
}

export default ProfileScreen

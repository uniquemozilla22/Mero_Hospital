import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ChooseaCategory from './ChooseCategory/ChooseaCategory.js'
import HeadingChooseFeild from './ChooseCategory/Heading.js'
import AppointmentForm from './Form/appointmentForm'

const Stack = createStackNavigator()

const Appointment =()=>{
    return (
        <Stack.Navigator initialRouteName="choose">
          <Stack.Screen name="choose" component={ChooseaCategory} options={{title:<HeadingChooseFeild/>}}/>
          <Stack.Screen name="appointmentForm" component={AppointmentForm} options={{title:<HeadingChooseFeild/>}}/>
        </Stack.Navigator>
    );
}

export default Appointment
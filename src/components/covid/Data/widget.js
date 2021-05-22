import React from 'react'
import { StyleSheet, View } from 'react-native'
import Box from './widgetBox/Box';


const Widget = () => {
    return (
    <View style={styles.container}>
        <Box title="Total Confirmed" today="99" total="999"/>
        <Box title ="Total Deaths" today="99" total="999"/>
    </View>
    )
}

const styles = StyleSheet.create({
  
    container:{
        flexDirection: "row",
        justifyContent:'space-around'
    },
    

})


export default Widget
import React from 'react'
import Icons from "react-native-vector-icons/Entypo";
import colors from '../../../../assets/colors/colors'
import { Text, StyleSheet, View } from 'react-native'
import { Block } from 'galio-framework'

const Box = ({title, today , total}) =>{
return (
    <Block  style={styles.card}>
            <Text style={styles.cardHeadings}>{title}</Text>
            <View style={styles.dataContainer}>
                <Text style={styles.cardHeadings}><Icons name="chevron-up" color={colors.white} size={20} />{today}</Text>
                <Text style={styles.cardHeadings}>{total}</Text>
            </View>
        </Block>
)
}


const styles = StyleSheet.create({
    card: {
        height: 100,
        flex:1,
        padding:15,
        borderRadius:15,
        marginHorizontal:5,
        backgroundColor:colors.green,
        elevation:20,

    },
    cardHeadings:{
        fontSize:16,
        fontWeight:'500',
        color:colors.white,
    },
    dataContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'20%'

    },
})


export default Box
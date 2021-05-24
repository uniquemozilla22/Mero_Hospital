import React from 'react'
import Icons from "react-native-vector-icons/Entypo";
import colors from '../../../../assets/colors/colors'
import { Text, StyleSheet, View } from 'react-native'
import { Block } from 'galio-framework'

const Box = ({title, today , total}) =>{
return (
    <Block  style={styles.card}>
            <Text style={styles.cardHeadings}>{title.split(" ")[0]}<Text style={{color:colors.green}}> {title.split(" ")[1]}</Text></Text>
            <View style={styles.dataContainer}>
                <Text style={styles.cardHeadings}><Icons name="chevron-up" color={colors.red} size={20} />{today}</Text>
                <Text style={styles.cardHeadings}>{total}</Text>
            </View>
        </Block>
)
}


const styles = StyleSheet.create({
    card: {
        width: 200,
        flex:1,
        padding:15,
        borderRadius:15,
        borderWidth:1,
        marginHorizontal:5,
        backgroundColor:colors.white,
        borderColor:colors.green,
        elevation:5,
    },
    cardHeadings:{
        fontSize:16,
        color:colors.black,
    },
    dataContainer:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'10%',
        height:"100%"

    },
})


export default Box
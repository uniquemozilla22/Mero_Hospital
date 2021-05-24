import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {List} from 'react-native-paper'
import colors from '../../../../assets/colors/colors';
import Icon from "react-native-vector-icons/Entypo"

 const Lists =({data}) => {
    const {question,answer}= data

    return (
        <List.Accordion
        title={question}
        titleNumberOfLines={3} 
        titleStyle={styles.accordionText}
        style={styles.accordion}
        left={props => <List.Icon {...props} icon="equal" color={colors.red}/>}>
        <List.Item descriptionNumberOfLines={100} description={answer} descriptionStyle={styles.item}></List.Item>
      </List.Accordion>
    )
}

const styles = StyleSheet.create({

    accordionText: {
        fontSize: 14,
    },

    item:{
        fontSize:12,
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
    }

})
export default Lists
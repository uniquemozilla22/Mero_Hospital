import React from 'react'
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import {Text,ScrollView , StyleSheet,TouchableOpacity} from 'react-native'
import colors from '../../../../assets/colors/colors'
import {useNavigation} from '@react-navigation/native'


const Box =({data}) =>{

    
    let {title,image_url} = data
    let navigation = useNavigation()



    return(
        <TouchableOpacity 
        style={styles.carouselCard}
        onPress={()=>{navigation.navigate({name:"singlenews",params:{data}})}}>
        <ImagedCarouselCard
       doc width={300}
        height={250}
        shadowColor="#ffffff"
        source={{
          uri: image_url,
        }}
        text={title.slice(0,100)+"..."}
      />
      </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    carousel:{
        flex: 1,
    },
    carouselCard:{
        marginHorizontal:5,
        elevation:20,
    }
})


export default Box
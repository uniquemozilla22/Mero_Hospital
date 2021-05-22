import React, { useState } from 'react'
import {ScrollView , StyleSheet} from 'react-native'
import axios_base from '../../../data/axios';
import Box from './Box/Box';

const WidgetNews=()=>{

  const [data,setData] =useState(null)
  let [datadisplay,setDatadisplay]=useState([])

  const getData=()=>{
    axios_base.get("https://corona.askbhunte.com/api/v1/news")
    .then(response=>{
      setData(response.data.data)
    })
    .catch(error=>{
      Alert.alert(
        "Data Not Found",
        "Server Errors:"+error

        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    })
    }


    React.useEffect(()=>{
      getData()

      if(data!==null)
      {
        let display=Object.keys(data).map((keys,value)=>{
          return <Box data={data[value]}/>
        })

        setDatadisplay(display)
      }
    },[])
  




    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {datadisplay}
      </ScrollView>
    )
}


const styles= StyleSheet.create({
    carousel:{
        flex: 1,
    },
})


export default WidgetNews
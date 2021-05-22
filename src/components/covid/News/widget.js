import React, { useState } from 'react'
import {ScrollView , StyleSheet, Alert, ToastAndroid} from 'react-native'
import axios from "axios";
import Box from './Box/Box';
import News from '../news.json'

const WidgetNews=()=>{

  const [data,setData] =useState(null)
  let [datadisplay,setDatadisplay]=useState([])

  const getData=()=>{
    axios.get("https://corona.askbhunte.com/api/v1/news")
    .then(response=>{
      setData(response.data.data)
    })
    .catch(error=>{
      setData(News.data)
    })
    }


    React.useEffect(()=>{
      getData()
      if(data!==null)
      {
        let display=Object.keys(data).map((keys,value)=>{
          return <Box key={value} data={data[value]}/>
        })

        setDatadisplay(display)
      }
    },[data])
  




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
import React,{useState,useEffect} from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import {List} from 'react-native-paper'
import axios from 'axios'
import Listings from './List/list.js'



const widgetFAQ = () => {

  const [datas,setDatas]= useState(null)
  let [faqDisplay,setFaqDisplay]=useState([])

  const fetchData=()=>{
    axios.get("https://corona.askbhunte.com/api/v1/faqs?limit=10")
    .then((response) => {
      setDatas(response.data.data)
    })
    .catch((error)=>{
      Alert.alert(
        "Fetching FAQ Error! ",
        "Server Errors:" + error[{ text: "OK", onPress: () => {} }]
      );
    } )
  }

  
  React.useEffect(()=>{
    fetchData()
    }
  ,[])

 
  

  return (
    <List.Section>
      {datas?Object.keys(datas).map((keys,value)=>{
        return <Listings key={value} data={datas[value]} />
      }):<ActivityIndicator size={"large"}/>}
    </List.Section>
  )
}

export default widgetFAQ

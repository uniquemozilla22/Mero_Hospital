import axios from 'axios'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {List} from 'react-native-paper'
import FAQ from '../faq.json'
import Listings from './List/list.js'
const widgetFAQ = () => {
  const [data,setData]= React.useState(null)
  let [faqdisplay,setFAQDisplay]=React.useState([])


  const getFaq=()=>{
    axios.get("https://corona.askbhunte.com/api/v1/faqs")
    .then((response) => {
      setData(response.data.data)
    })
    .catch((error)=>{
      Data(FAQ.data)
    } )
  }

  React.useState(()=>{
    getFaq()
    if(data!==null)
    {
      let display=Object.keys(data).map((keys,value)=>{
        return <Listings key={keys} data={data[value]}/>
      })
      setFAQDisplay(display)
    }
  },[])

  

  return (
    <List.Section>
      {faqdisplay}
    </List.Section>
  )
}

export default widgetFAQ

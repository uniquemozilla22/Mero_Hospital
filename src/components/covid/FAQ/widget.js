import React,{useState,useEffect} from 'react'
import { Text, View } from 'react-native'
import {List} from 'react-native-paper'
import FAQ from '../faq.json'
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
      setDatas(FAQ.data)
    } )
  }

  const dataFetching = (faq) =>{
      if (faq)
    {
      let display=Object.keys(faq).map((keys,value)=>{
        return <Listings key={value} data={faq[value]} />
      })
      setFaqDisplay(display)
    }
  }
  
  React.useEffect(()=>{
    fetchData()
    dataFetching(datas)
    }
  ,[datas])

 
  

  return (
    <List.Section>
      {faqDisplay}
    </List.Section>
  )
}

export default widgetFAQ

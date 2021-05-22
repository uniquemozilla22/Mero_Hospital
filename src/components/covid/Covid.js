import React from 'react'
import Layout from '../../screens/Layout'
import Heading from './Heading.js'
import WidgetData from './Data/widget'
import WidgetNews from './News/widget'

const Covid =()=>{


    return(
        <Layout>
            <Heading title="Status"/>
            <WidgetData/>
            <Heading title="Latest News"/>
            <WidgetNews />

        </Layout>
    )
}


export default Covid
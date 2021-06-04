import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, View , Text} from 'react-native'
import colors from '../../../assets/colors/colors';
import Box from './widgetBox/Box';


const Widget = () => {

    const [data, setData] = useState(null)

    const fetchData = () => {
        axios.get("https://covid19.mohp.gov.np/covid/api/confirmedcases")
            .then(response => {
                setData(response.data.nepal)
            })
            .catch(error => [
                console.log(error)
            ])
    }

    useEffect(() => {
        fetchData()
    }, [data])



    return (<>

                <View style={styles.container}>

            {data !== null ? <>

            <Box title="Total Confirmed" today={data.today_newcase} total={data.positive} />
                <Box title="Total Deaths" today={data.today_death} total={data.deaths} />
                </> : <Text>Loading...</Text>}
        </View>
        <Text style={styles.date}>Updated at: {data !== null ?data.updated_at:"loading..."}</Text>

        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    date:{
        color:colors.greengrey,
        paddingVertical:5
    }


})


export default Widget
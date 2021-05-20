import React from 'react'
import {AsyncStorage, StyleSheet, Text,TextInput, TouchableOpacity,View,Alert} from 'react-native'
import CategoryCard from './FeildCard.js'
import {DateTimePickerModal} from 'react-native-paper-datetimepicker' 
import Layout from '../../../screens/Layout.js'
import colors from '../../../assets/colors/colors.js'
import Heading from './Heading.js'
import TitleHeading from './TItleHeading.js'
import axios from '../../../data/axios.js'
import { List } from 'react-native-paper'


const AppointmentFrom = ({navigation, route}) =>{
    const {categoryId,source,title ,description} = route.params
            
    const [dates, setDates] = React.useState(new Date())
    
    const [visible, setVisible] = React.useState(false);
    const [dateVisible,setDateVisible]= React.useState(false);
    const [UserFeildAppointment,setUserFeildAppointment]=React.useState(null);
    const onDismiss = React.useCallback(() => {
      setVisible(false);
    }, [setVisible]);
   
    const onChange = React.useCallback((date) => {
      setVisible(false);
      setDateVisible(true)
      setDates(date)
    }, []);

    React.useEffect(()=>{
      getUserFeildAppointments()
    },[])


    const getUserFeildAppointments=async()=>{    
      await AsyncStorage.getItem("@user_token")
      .then((token)=>{
      axios.get("/userfeildappointment"+token,{params:{feild:categoryId}})
      .then(response=>{

        let listOfAppointments= response.data.map((data)=>{
          return <List.Item key={data._id} title={ "Date : "+data.date.toLocaleString().split("T")[0]} description={data.date.toLocaleString().split("T")[1].split(".")[0]} right={props => <List.Icon {...props} onPress={()=>console.log("pressed")} icon="delete" color={colors.red} />}/>
        })

        setUserFeildAppointment(listOfAppointments)
        
      })
      .catch(error=>{
        Alert.alert(
          "Check your Internet! ",
          "Server Fetching Errors:"+error
  
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      })
    })
    .catch((error)=>{
      Alert.alert(
        "Appointment Not Registered! ",
        "Server Errors:"+error

        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    })

    }


    const postData=async()=>{
      await AsyncStorage.getItem("@user_token")
      .then((token)=>{
         axios.post("/appointments"+token,{date:dates,feild:categoryId})
        .then((response)=>{
          const {success, error}= response.data
          console.log(error)
            success?Alert.alert(
              "Appointment Registered! ",
              "Your Appointment has been registered for" + dates.toLocaleString().split(",")[0].trim() +" at time "+dates.toLocaleString().split(",")[1].trim(),

              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            ):Alert.alert(
              "Appointment Not Registered! ",
              "Data Error:"+error.toString()

              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            );
          }
        )
        .catch((error)=>{
          console.log(error)
          Alert.alert(
            "Appointment Not Registered! ",
            "Server Errors:"+error

            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        })

      })
      .catch((error)=>{
        Alert.alert(
          "Appointment Not Registered! ",
          "Token Error:"+error

          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      })
    }

    return(
        <>
        <Layout>
          <TitleHeading title={title} />
            <CategoryCard key={categoryId} categoryId ={categoryId} source={source} title={title} description={description} />
            <Heading/>
            <DateTimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        date={dates}
        onConfirm={onChange}
        label="Pick A Date"
      />
            {(dateVisible?<>
              <TitleHeading title={"Your Time"}></TitleHeading>
            
            <View style={styles.datePickerStyle}>
              <Text visible={dateVisible}><Text style={styles.head}>Date:</Text> {dates.toLocaleString().split(",")[0].trim()}</Text>
              <Text visible={dateVisible}><Text style={styles.head}>Time:</Text> {dates.toLocaleString().split(",")[1].trim()}</Text>
            </View></>:null)}
            {UserFeildAppointment}
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={[
                styles.signIn,
                {
                  borderSize:1,
                  borderColor:colors.green,
                  marginVertical: 5,
                  backgroundColor:colors.white,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.green,
                    fontWeight:"bold"
                  },
                ]}
              >
                Set Date and Time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={dateVisible?postData:null}
              style={[
                styles.signIn,
                {
                  marginBottom: 25,
                  backgroundColor:dateVisible?colors.green:colors.greengrey
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.white,
                    fontWeight:"bold"
                  },
                ]}
              >
                Submit
              </Text>
            </TouchableOpacity>

            </Layout>
        </>
    )

}

const styles = StyleSheet.create({
    datePickerStyle: {
        flexDirection:"row",
        width: 300,
        marginTop: 10,
        alignSelf:"center",
        justifyContent:"space-between",
      },
      head:{
        color:colors.red,
        fontWeight:'bold',
        fontSize:16
      },
      signIn: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingVertical: 10,
        marginHorizontal:35,
      },


})


export default AppointmentFrom
import React from 'react'
import CategoryCard from '../ChooseCategory/CategoryCard.js'
import DatePicker from 'react-native-datepicker'


const AppointmentFrom = ({navigation, route}) =>{
            
    const [date, setDate] = React.useState(new Date())

    const {categoryId,source,title ,description} = route.params

    return(
        <>
            <CategoryCard key={categoryId} categoryId ={categoryId} source={source} title={title} description={description}/>
            <DatePicker
            date={date}
            onDateChange={setDate}
            />
        </>
    )

}


export default AppointmentFrom
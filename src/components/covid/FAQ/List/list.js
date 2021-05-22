import React from 'react'
import {List} from 'react-native-paper'

 const Lists =({data}) => {

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

    const {question,answer}= data
    console.log(data)
    return (
        <List.Accordion
        title={question}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title={answer}/>
      </List.Accordion>
    )
}
export default Lists
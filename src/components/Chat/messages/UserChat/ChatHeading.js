import React from "react";
import { View, Text, StyleSheet , TouchableOpacity} from "react-native";
import colors from "../../../../assets/colors/colors";
import {useNavigation} from '@react-navigation/native'
import Icon from "react-native-vector-icons/FontAwesome";

const Greet = ({ topic }) => {
  const navigation = useNavigation()
  const topic_array = topic.split(" ");
  
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <View style={styles.greetingUser}>
    <Icon name={"chevron-left"} size={20} color={colors.green}/>
      
      <Text style={styles.heading}>
        {topic_array[0] + " " + topic_array[1] + " "}
        <Text style={styles.redColor}>
          {topic_array.length>=3?topic_array[topic_array.length - 1]:" "}{" "}
        </Text>
      </Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  greetingUser: {
    margin: 10,
    marginTop: 20,
    flexDirection:"row"

  },
  redColor: {
    color: colors.green,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
    marginLeft: 5
  },
});

export default Greet;

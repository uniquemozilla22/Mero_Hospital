import React from "react";
import { View, Text, StyleSheet , TouchableOpacity} from "react-native";
import colors from "../../../../assets/colors/colors";
import {useNavigation} from '@react-navigation/native'

const Greet = ({ topic }) => {
  const topic_array = topic.split(" ");
  return (
    <View style={styles.greetingUser}>
      
      <Text style={styles.heading}>
        {topic_array[0] + " " + topic_array[1]!==undefined?topic_array[1]:" " + " "}
        <Text style={styles.redColor}>
          {topic_array.length>=3?topic_array[topic_array.length - 1]:" "}{" "}
        </Text>
      </Text>
    </View>
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

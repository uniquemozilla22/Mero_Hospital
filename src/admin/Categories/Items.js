import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import colors from "../../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
const Items = ({ data }) => {
  const navigation = useNavigation();
  const { description, image, name } = data;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EditCategory", { ...data })}
    >
      <Card style={styles.container}>
        <Card.Cover source={{ uri: image }} />
        <Card.Title
          title={
            <Text style={styles.title}>
              {name[0].toUpperCase() + name.toLowerCase().slice(1)}
            </Text>
          }
          right={() => (
            <Card.Actions>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate({
                    path: "EditCategory",
                    params: { data },
                  })
                }
              >
                <Entypo name={"edit"} size={20} color={colors.green} />
              </TouchableOpacity>
            </Card.Actions>
          )}
        />
        <Card.Content>
          <Paragraph style={styles.paragraph}>{description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: colors.white,
  },
  paragraph: {
    color: colors.grey,
  },
  title: {
    color: colors.black,
  },
  subtitle: {
    color: colors.black,
  },
});

export default Items;

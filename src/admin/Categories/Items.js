import React from "react";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import colors from "../../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
const Items = ({ data }) => {
  const { description, image, name } = data;
  return (
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
            <Button>
              <Entypo name={"edit"} size={20} color={colors.green} />
            </Button>
          </Card.Actions>
        )}
      />
      <Card.Content>
        <Paragraph style={styles.paragraph}>{description}</Paragraph>
      </Card.Content>
    </Card>
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

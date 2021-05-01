import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const ProductCard = ({ source, title, price = 99 }) => {
  const title_heading = (
    <Title style={styles.title}>{title.toUpperCase()}</Title>
  );
  const prices_display = (
    <Paragraph style={styles.price}>{"$ " + price}</Paragraph>
  );
  const navigation = useNavigation();
  return (
    <>
      <Card
        style={styles.card}
        onPress={() => navigation.navigate("singleProduct")}
      >
        <Card.Cover source={{ uri: source }} style={styles.cover} />
        <Card.Title
          style={styles.title}
          title={title_heading}
          subtitle={prices_display}
          right={(props) => (
            <Button
              style={styles.button}
              icon="cart"
              color={colors.green}
            ></Button>
          )}
        />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderColor: "#ffffff",
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 5,
    width: 300,
  },
  button_product: {
    margin: 0,
    padding: 0,
  },
  cover: {
    borderRadius: 20,
  },
  title: {
    color: colors.green,
    fontWeight: "bold",
    fontSize: 16,
  },
  button: { marginLeft: 40 },
  price: {
    fontSize: 16,
  },
});

export default ProductCard;

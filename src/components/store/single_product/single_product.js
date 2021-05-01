import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Layout from "../../../screens/Layout";
import colors from "../../../assets/colors/colors";
import ProductHeading from "./ProductHeading";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <ProductHeading topic={" X"} />
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center", marginHorizontal: 30 }}>
            <Image
              style={styles.productImg}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca",
              }}
            />
            <Text style={styles.name}>Super Soft T-Shirt</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </Text>
          </View>
          <View style={styles.contentSize}>
            <TouchableOpacity style={styles.btnSize}>
              <Text>250</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}>
              <Text>500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}>
              <Text>750</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}>
              <Text>1000</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => {
                navigation.navigate("cart");
              }}
            >
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 20,
    color: colors.black,
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    color: colors.green,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: colors.grey,
    fontSize: 14,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: colors.red,
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },

  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: colors.greengrey,
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    flex: 1,
    margin: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: colors.green,
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
    flexDirection: "row",
  },
});

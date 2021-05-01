import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Layout from "../../screens/Layout";
import Category from "./Category";
import Card from "./ProductCard.js";

const ChatCategory = () => {
  return (
    <Layout>
      <Category category={"Tablets"} />
      <Category category={"Tonic"} />
    </Layout>
  );
};

export default ChatCategory;

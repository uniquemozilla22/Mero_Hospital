import React from "react";
import Layout from "../../screens/Layout";
import StoreHeading from "./StoreHeading";
import StoreSearch from "./StoreSearch";
import StoreProducts from "./StoreProducts";
const Store = () => {
  return (
    <Layout>
      <StoreHeading topic={"Online Pharmacy"} />
      <StoreSearch />
      <StoreProducts />
    </Layout>
  );
};

export default Store;

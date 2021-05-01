import React from "react";
import Layout from "../../screens/Layout";
import StoreScreen from "../../screens/StoreScreen";
import StoreHeading from "./StoreHeading";
const Store = () => {
  return (
    <Layout>
      <StoreHeading topic={"Online Pharmacy"} />
      <StoreScreen />
    </Layout>
  );
};

export default Store;

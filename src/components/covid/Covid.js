import React, { useEffect, useState } from "react";
import Layout from "../../screens/Layout";
import Heading from "./Heading.js";
import WidgetData from "./Data/widget";
import WidgetNews from "./News/widget";
import WidgetFAQ from "./FAQ/widget";

const Covid = () => {
  return (
    <Layout>
      <Heading title="Status" />
      <WidgetData />
      <Heading title="Latest News" />
      <WidgetNews />
      <Heading title="COVID Questions" />
      <WidgetFAQ />
    </Layout>
  );
};

export default Covid;

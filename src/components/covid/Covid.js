import React, { useEffect, useState } from "react";
import Layout from "../../screens/Layout";
import Heading from "./Heading.js";
import WidgetData from "./Data/widget";
import WidgetNews from "./News/widget";
import WidgetFAQ from "./FAQ/widget";
import Hospital from "./HospitalData.json";
import axios from "axios";

const Covid = () => {
  const [hospitalData, setHospitalData] = useState(Hospital.data);

  useEffect(() => {
    // fetchHospitalData();
    console.log(hospitalData);
  }, [hospitalData]);

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

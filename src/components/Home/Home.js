import React from "react";
import TopBar from "./topBar";
import Greet from "./Greet";
import ContentHome from "./ContentHome";
import Layout from '../../screens/Layout'

const Home = () => {
  const Messages = [
    "Do a Task , Wear a Mask ",
    "Chat with Doctor",
    "Online Pharmacy",
    "Get a Appointment",
  ];
  return (
    <Layout>
      <TopBar location={"Kathmandu"} />
      <Greet user={"Yogesh"} />
      <ContentHome Messages={Messages} />
    </Layout>
  );
};

export default Home;

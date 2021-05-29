import React from "react";
import TopBar from "./topBar";
import Greet from "./Greet";
import ContentHome from "./ContentHome";
import Layout from "../../screens/Layout";

const Home = (props) => {
  const Messages = [
    "Do a Task , Wear a Mask ",
    "Chat with Doctor",
    "See Covid Information",
    "Get a Appointment",
  ];
  return (
    <Layout>
      <TopBar location={props.city} />
      <Greet user={props.name} />
      <ContentHome Messages={Messages} />
    </Layout>
  );
};

export default Home;

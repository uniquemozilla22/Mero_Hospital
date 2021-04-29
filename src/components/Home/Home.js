import React from "react";
import TopBar from "./topBar";
import Greet from "./Greet";
import ContentHome from "./ContentHome";

const Home = () => {
  const Messages = [
    "Do a Task , Wear a Mask ",
    "Chat with Doctor",
    "Online Pharmacy",
    "Get a Appointment",
  ];
  return (
    <>
      <TopBar location={"Kathmandu"} />
      <Greet user={"Yogesh"} />
      <ContentHome Messages={Messages} />
    </>
  );
};

export default Home;

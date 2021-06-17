import React, { useState, useRef } from "react";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { Modalize } from "react-native-modalize";
import SingleAppointment from "./singleprofile.js";
import ListItem from "./ListItem.js";
import Heading from "./Heading.js";
import Layout from "../../screens/Layout.js";

const Appointment = ({ appointments, fetchToken }) => {
  const [index, setIndex] = useState(null);
  const modalizeRef = useRef(null);

  const onOpen = (i) => {
    setIndex(i);
    modalizeRef.current?.open();
  };
  return appointments ? (
    <Layout fetcherData={() => fetchToken()}>
      <Heading topic={"Appointments Data"} />
      {Object.keys(appointments).map((index) => (
        <ListItem
          key={appointments[index]._id}
          appointment={appointments[index]}
          onOpen={onOpen}
          index={index}
        />
      ))}
      <Modalize
        ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        closeOnOverlayTap
      >
        <SingleAppointment
          data={appointments[index]?.user}
          date={appointments[index]?.date}
          feild={appointments[index]?.feild.name}
        />
      </Modalize>
    </Layout>
  ) : (
    <ActivityIndicator size="large" />
  );
};

export default Appointment;

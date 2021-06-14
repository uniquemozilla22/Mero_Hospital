import React, { useState, useRef } from "react";
import { ActivityIndicator, View } from "react-native";
import ListItem from "./ListItem.js";
import { Modalize } from "react-native-modalize";
import SingleAppointment from "./singleprofile.js";

const TodayAppointmentList = ({ appointments }) => {
  const [index, setIndex] = useState(null);
  const modalizeRef = useRef(null);

  const onOpen = (i) => {
    setIndex(i);
    modalizeRef.current?.open();
  };

  return appointments ? (
    <>
      <View>
        {Object.keys(appointments)
          .filter(
            (index) =>
              new Date(appointments[index].date).getDate() ===
              new Date().getDate()
          )
          .map((index) => (
            <ListItem
              key={appointments[index]._id}
              appointment={appointments[index]}
              onOpen={onOpen}
              index={index}
            />
          ))}
      </View>
      <Modalize
        ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        adjustToContentHeight
        closeOnOverlayTap
      >
        <SingleAppointment
          data={appointments[index]?.user}
          date={appointments[index]?.date}
          feild={appointments[index]?.feild.name}
        />
      </Modalize>
    </>
  ) : (
    <ActivityIndicator size="large" />
  );
};

export default TodayAppointmentList;

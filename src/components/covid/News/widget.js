import React, { useState } from "react";
import { ScrollView, StyleSheet, Alert, ToastAndroid , ActivityIndicator} from "react-native";
import axios from "axios";
import Box from "./Box/Box";

const WidgetNews = () => {
  const [data, setData] = useState(null);
  let [datadisplay, setDatadisplay] = useState([]);

  const getData = () => {
    axios
      .get("https://corona.askbhunte.com/api/v1/news?limit=10")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        Alert.alert(
          "Fetching News error Not Registered! ",
          "Server Errors:" + error[{ text: "OK", onPress: () => {} }]
        );
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}
    >
      {data?Object.keys(data).map((keys, value) => {
        return <Box key={value} data={data[value]} />;
      }):<ActivityIndicator size={"large"}/>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
});

export default WidgetNews;

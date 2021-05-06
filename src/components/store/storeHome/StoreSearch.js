import React, { useEffect } from "react";
import colors from "../../../assets/colors/colors";
import { Input } from "galio-framework";
import { StyleSheet } from "react-native";

const StoreSearch = ({ tags, onClick, onInput, onSubmit, defaultvalue }) => {
  return (
    <>
      <Input
        value={defaultvalue}
        placeholder="Search"
        right
        icon=""
        family="antdesign"
        iconSize={20}
        iconColor={colors.green}
        onEndEditing={() => {
          onSubmit();
        }}
        onChangeText={(e) => onInput(e)}
      />
    </>
  );
};

export default StoreSearch;

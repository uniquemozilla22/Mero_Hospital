import React from "react";
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
        icon="find"
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

const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 5,
  },
});

export default StoreSearch;

import React from "react";
import colors from "../../../assets/colors/colors";
import { Input } from "galio-framework";

const StoreSearch = () => {
  return (
    <Input
      placeholder="Search"
      right
      icon="find"
      family="antdesign"
      iconSize={20}
      iconColor={colors.green}
    />
  );
};

export default StoreSearch;

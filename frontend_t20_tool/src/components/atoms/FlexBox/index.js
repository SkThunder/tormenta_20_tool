import React from "react";
import { View } from "./styles";

const FlexBox = ({ style, children }) => {
  return <View style={style}>{children}</View>;
};

export default FlexBox;

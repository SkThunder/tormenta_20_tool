import React from "react";
import { Container, ClickContainer } from "./styles";
import { pickMode, getSize, getHoverSize } from "../../../utils/imageFunctions";
import { DEFAULT_TITLE } from "../../../constants/icon";

const IconBox = ({
  onClick,
  style,
  borderMode,
  size,
  title,
  transparent,
  opacity,
  children,
}) => {
  const [height, width] = getSize(size);
  const [hHeight, hWidth] = getHoverSize([height, width]);
  const clickable = onClick !== undefined ? true : false;
  return !clickable ? (
    <Container
      style={style}
      borderMode={pickMode(borderMode)}
      height={height}
      width={width}
      transparent={transparent}
      title={title ? title : DEFAULT_TITLE}
      opacity={opacity ? opacity : 1}
    >
      {children}
    </Container>
  ) : (
    <ClickContainer
      style={style}
      borderMode={pickMode(borderMode)}
      height={height}
      width={width}
      transparent={transparent}
      opacity={opacity ? opacity : 1}
      title={title ? title : DEFAULT_TITLE}
      hHeight={hHeight}
      hWidth={hWidth}
      onClick={onClick}
    >
      {children}
    </ClickContainer>
  );
};

export default IconBox;

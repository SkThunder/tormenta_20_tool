import {
    DEFAULT_HEIGHT,
    DEFAULT_WIDTH,
    HOVER_MULTIPLIER,
  } from "../constants/image";

export function getImageUrl(src) {
  //Retorna o endereço da imagem na pasta public.
  //Cuidado pra não colocar "/" antes do nome do arquivo.
  return `${process.env.PUBLIC_URL}/images/${src}`;
}

export function pickMode(param) {
  switch (param) {
    case "square":
      return 0;
    case "circle":
      return 1;
    default:
      return 0;
  }
}

export function getSize(param) {
  if (param && Array.isArray(param)) {
    return [param[0], param[1]];
  } else if (Object.prototype.toString.call(param) === "[object String]") {
    return [param, param];
  } else {
    return [DEFAULT_HEIGHT, DEFAULT_WIDTH];
  }
}

export function getHoverSize(param) {
  const [height, width] = param;
  const hNum = parseFloat(height);
  const wNum = parseFloat(width);
  const hNumEnd = height.substring(hNum.toString().length, height.length);
  const wNumEnd = width.substring(wNum.toString().length, width.length);
  return [
    `${hNum * HOVER_MULTIPLIER}${hNumEnd}`,
    `${wNum * HOVER_MULTIPLIER}${wNumEnd}`,
  ];
}

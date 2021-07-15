import colors from "../colors";
import { DARK } from "../../constants/theme";
import { lighten, darken, grayscale } from "polished";

const config = {
  title: DARK,

  colors: {
    primary: colors.xiketic,
    secondary: colors.bluish_grey,

    deep_background: colors.dark_grey,
    medium_background: lighten(0.07, colors.dark_grey),
    pop_background: lighten(0.14, colors.dark_grey),

    disabled_box: grayscale(colors.xiketic),
    neutral_box: lighten(0.18, colors.dark_grey),
    active_box: lighten(0.03, colors.dark_grey),

    high_text: darken(0.13, colors.white),
    medium_text: darken(0.4, colors.white),
    disabled_text: darken(0.62, colors.white),
  },
};

export default config;

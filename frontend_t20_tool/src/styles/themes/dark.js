import colors from "../colors";
import { DARK } from "../../constants/theme";
import { lighten, darken } from "polished";

const config = {
  title: DARK,

  colors: {
    primary: colors.moderate_red,
    secondary: colors.dark_purple,

    deep_background: colors.dark_grey,
    medium_background: lighten(0.07, colors.dark_grey),
    pop_background: colors.dark_charcoal,

    disabled_box: darken(0.4, colors.xiketic),
    neutral_box: lighten(0.05, colors.dark_grey),
    active_box: lighten(0.02, colors.dark_charcoal),

    high_text: darken(0.13, colors.white),
    medium_text: darken(0.4, colors.white),
    disabled_text: darken(0.62, colors.white),
  },
};

export default config;

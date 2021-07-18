import colors from "../colors";
import { LIGHT } from "../../constants/theme";
import { darken, lighten } from "polished";

const config = {
  title: LIGHT,

  colors: {
    primary: colors.bright_red,
    secondary: colors.dark_blue,

    deep_background: colors.white,
    medium_background: colors.moderate_red,
    pop_background: colors.dark_purple,

    disabled_box: darken(0.5, colors.pale_pink),
    neutral_box: lighten(0.1, colors.moderate_red),
    active_box: colors.bright_red,
    
    high_text: colors.black,
    medium_text: colors.black,
    disabled_text: colors.black,
  },
};
export default config;

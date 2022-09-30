const colors = {
  background: {
    light: "#1a1a1a",
    dark: "#16151A",
  },
  typography: {
    _100: "#1a1a1a",
    _90: "#3a3a3a",
    _80: "#595959",
    _70: "#6c6c6c",
    _60: "#949494",
    _50: "#b3b3b3",
    _40: "#c9c9c9",
    _30: "#d9d9d9",
    _20: "#e6e6e6",
    _10: "#f2f2f2",
  },
  primary: {
    _100: "#fc824a",
    _20: "#fc824a20",
  },
  secondary: {
    _100: "#4ac4fc",
  },
  triadic: {
    _100: "#c4fc4a",
  },
  border: {
    light: "#d0d0d0b3",
  },
  white: {
    _100: "#FFFFFF",
    _90: "#F1F1F1",
    _70: "#ffffffb3",
    _60: "#ffffff99",
    _7: "#ffffff12",
  },
  states: {
    error: "#FF375F",
    pending: "#FF9F0B",
    success: "#31D158",
  },
};

export const flatColors = {
  background_light: colors.background.light,
  typography_100: colors.typography._100,
  typography_90: colors.typography._90,
  typography_80: colors.typography._80,
  typography_70: colors.typography._70,
  typography_60: colors.typography._60,
  background_dark: colors.background.dark,
  primary_100: colors.primary._100,
  secondary_100: colors.secondary._100,
  white_100: colors.white._100,
  white_70: colors.white._70,
  white_60: colors.white._60,
  states_error: colors.states.error,
  states_pending: colors.states.pending,
  states_success: colors.states.success,
};

export type ColorsType = keyof typeof flatColors;

export default colors;

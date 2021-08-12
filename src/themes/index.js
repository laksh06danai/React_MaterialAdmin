import defaultTheme from "./default";

import { createMuiTheme } from "@material-ui/core";

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "500",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "500",
    },
    h3: {
      fontSize: "1.64rem",
      fontWeight: "500",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "500",
    },
    h5: {
      fontSize: "1.285rem",
      fontWeight: "500",
    },
    h6: {
      fontSize: "1.142rem",
      fontWeight: "500",
    },
  },
};

const themes = {
  default: createMuiTheme({ ...defaultTheme, ...overrides }),
};

export default themes;

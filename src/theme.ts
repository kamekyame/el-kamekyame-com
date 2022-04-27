import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {},
});

export const headerTheme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
  },
});

export default theme;

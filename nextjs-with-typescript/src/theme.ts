import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});
const LighTheme = createTheme({
  palette: {
    mode: "light",
  },
});
const DarkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const getActiveTheme = (themeMode: "light" | "dark") => {
  return themeMode === "light" ? LighTheme : DarkTheme;
};
export default theme;

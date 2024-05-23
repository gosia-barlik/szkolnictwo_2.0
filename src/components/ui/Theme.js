import { createTheme, responsiveFontSizes } from "@mui/material";
import { cyan, blue, purple, red, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          main: cyan[800],
          light: cyan[700],
          dark: cyan[900]
        },
        secondary: {
          main: red[500],
        },
        success: {
          main: purple[500],
        },
      },
      text: {
        primary: {
          main: grey[900]
        },
        secondary: {
          main: grey[700]
        }
      }
});

export default responsiveFontSizes(theme);
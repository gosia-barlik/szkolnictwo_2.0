import { createTheme, responsiveFontSizes } from "@mui/material";
import { cyan, indigo, blue, purple, red, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          main: '#3d5afe',
          light: cyan[50],
          dark: cyan[900]
        },
        secondary: {
          main: '#3d5afe',
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
import { createTheme } from "@mui/material";

const readableFont = '"Inter", sans-serif';
const fancyFont = '"Yuji Syuku", serif';

// TODO: configurable par CMS ?
export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: readableFont,

    h1: {
      fontFamily: fancyFont,
      fontSize: "3.5rem"
    },
    h2: {
      fontFamily: readableFont,
      fontSize: "2rem"
    },
    h3: {
      fontFamily: readableFont,
      fontSize: "1.8rem"
    },
    h4: {
      fontFamily: readableFont,
      fontSize: "1.5rem"
    },
    h5: {
      fontFamily: readableFont,
      fontSize: "1.25rem"
    },
    h6: {
      fontFamily: readableFont,
      fontSize: "1rem"
    }
  },
  components: {
    MuiButtonBase: { defaultProps: { disableRipple: true } }
  },
  palette: {
    primary: {
      main: "#3ab049",
    },
  },
});
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#00f8ae",
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "925px",
    xl: "1200px",
    xxl: "1536px",
  },
});

export default theme;

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./logo.css";
const Logo = () => {
  const hl = "HL";
  return (
    <Box
      className="rainbow"
      h={{ base: "5px", md: "10px" }}
      w={{ base: "5px", md: "10px" }}
    >
      <Text
        className="sf"
        color="white"
        fontSize={{ base: "25px" }}
        fontWeight="extrabold"
        transform="rotate(-45deg)"
      >
        {hl}
      </Text>
    </Box>
  );
};

export default Logo;

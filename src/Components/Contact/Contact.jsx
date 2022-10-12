import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import TitleSection from "../AboutMe/TitleSection";

const Contact = ({ data }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h={{ base: "980px", md: "100%" }}
      bgColor="#0e1015"
      mt="45px"
      mb="45px"
    >
      <TitleSection data={data} n={4} />
    </Flex>
  );
};

export default Contact;

import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useAppContext from "../../context/context";
import TitleSection from "../AboutMe/TitleSection";

const Contact = ({ data }) => {
  const { language, setlanguage } = useAppContext();
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
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text className="sf" fontSize="4rem" color="#19b1ff">
          {language === "es" ? "Contactame" : "Get In Touch"}
        </Text>
        <Text color="white" className="calibre">
          {language === "es"
            ? "Estoy "
            : "I'm happy to answer any questions you may have"}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Contact;

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useAppContext from "../../context/context";
import data from "../../data";

const AboutMe = () => {
  const { language, setlanguage } = useAppContext();

  return (
    <Flex flexDirection="column" w="50%">
      <Text color="white">{data[language].aboutMe[1]}</Text>
      <Text color="white">{data[language].aboutMe[2]}</Text>
      <Text color="white">{data[language].aboutMe[3]}</Text>
    </Flex>
  );
};

export default AboutMe;

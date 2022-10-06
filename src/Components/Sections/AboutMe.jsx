import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import useAppContext from "../../context/context";
import data from "../../data";
import hernan from "../../assets/images/hernan.png";
import { motion } from "framer-motion";
const AboutMe = () => {
  const { language, setlanguage } = useAppContext();

  return (
    <Flex flexDirection={{ base: "column", lg: "row" }} >
      <Flex flexDirection="column">
        <Text
          as={motion.h1}
          initial={{ opacity: 0 }}
          transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
          whileInView={{ opacity: 1 }}
          color="white"
        >
          {data[language].aboutMe[1]}
        </Text>
        <Text
          as={motion.h1}
          transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          color="white"
        >
          {data[language].aboutMe[2]}
        </Text>
        <Text
          as={motion.h1}
          transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          color="white"
        >
          {data[language].aboutMe[3]}
        </Text>
      </Flex>
      <Box p={4} w="100%">
        <Image
          as={motion.img}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s,all ease-in-out .5s"
          src={hernan}
          alt="me"
          h="200px"
          w="170px"
          borderRadius="15px"
          filter="grayscale(100%)"
          boxShadow="rgba(10, 70, 110,0.5) 5px 5px, rgba(10, 70, 110, 0.3) 10px 10px, rgba(10, 70, 110, 0.2) 15px 15px, rgba(10, 70, 110, 0.1) 20px 20px, rgba(10, 70, 110, 0.05) 25px 25px;"
          _hover={{ filter: "grayscale(15%)" }}
        />
      </Box>
    </Flex>
  );
};

export default AboutMe;

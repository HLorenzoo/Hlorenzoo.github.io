import { Divider, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useAppContext from "../../context/context";

const AboutMe = ({ data, section }) => {
  const { language, setlanguage } = useAppContext();
  return (
    <>
      <Flex
        w="50%"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="sf"
        color="#19b1ff"
        transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 1.3s"
        fontWeight="bold"
        fontSize={{ base: "15px", md: "1.1rem" }}
      >
        <Flex alignItems="center">
          <Text>0.1</Text>
          <Text
            color="white"
            pl={{ base: "10px" }}
            fontSize={{ base: "1rem", md: "1.5rem" }}
          >
            {`${data[language].navbar[1]}`}
          </Text>
        </Flex>
        <Divider
          mt="15px"
          ml="20px"
          w="75%"
          display={{ base: "none", lg: "block" }}
        />
      </Flex>
      <Divider mt="10px" mb="10px" ml="20px" w="75%" display={{ lg: "none" }} />
      <section />
    </>
  );
};

export default AboutMe;

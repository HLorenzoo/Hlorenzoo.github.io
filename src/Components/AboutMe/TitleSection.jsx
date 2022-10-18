import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useAppContext from "../../context/context";

const TitleSection = ({ data, n }) => {
  const { language, setlanguage } = useAppContext();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="90vw"
      as={motion.div}
      transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.1s"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Text color="#19b1ff" fontSize={{ base: "0.9rem", md: "1.1rem" }}>
        0.{n+1}
      </Text>
      <Text
        color="white"
        className="calibre"
        fontWeight="bold"
        pl={{ base: "10px" }}
        fontSize={{ base: "1.5rem", md: "2rem" }}
      >{`${data[language].navbar[n]}`}</Text>
      <Divider
        as={motion.hr}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
        borderColor="#19b1ff"
        mt="10px"
        mb="10px"
        ml="20px"
        w={{ base: "40%", md: "55%" }}
        display={{ lg: "block" }}
      />
    </Flex>
  );
};

export default TitleSection;

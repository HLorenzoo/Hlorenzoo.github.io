import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useAppContext from "../../context/context";

const TitleSection = ({ data, sectionPage }) => {
  const { language, setlanguage } = useAppContext();
  return (
    <Flex
      flexDirection="column"
      
      alignItems="center"
      justifyContent="center"
    >
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
        pl={{ base: "0px", md: "50px" }}
        pt={{ base: "50px", md: "0px" }}
      >
        <Flex alignItems="center" justifyContent="center">
          <Text fontSize={{ base: "0.9rem", md: "1.1rem" }}>0.1</Text>
          <Text
            color="white"
            className="calibre"
            fontWeight="bold"
            pl={{ base: "10px" }}
            fontSize={{ base: "1.5rem", md: "2rem" }}
          >
            {`${data[language].navbar[1]}`}
          </Text>
        </Flex>
        <Divider
          borderColor="#19b1ff"
          mt="15px"
          ml="20px"
          w={{ md: "30%", lg: "60%" }}
          display={{ base: "none", lg: "block" }}
        />
      </Flex>
      <Divider
        borderColor="#19b1ff"
        mt="10px"
        mb="10px"
        ml="20px"
        w="75%"
        display={{ lg: "none" }}
      />
      {sectionPage}
    </Flex>
  );
};

export default TitleSection;

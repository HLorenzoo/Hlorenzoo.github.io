import React from "react";
import { Divider, Flex, Text, Box, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import hernan from "../../assets/images/hernan.png";
import useAppContext from "../../context/context";
import TitleSection from "./TitleSection";

const AboutMe = ({ data }) => {
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
      <TitleSection data={data} n={1} />
      <Flex
        alignItems="center"
        justifyContent="center"
        w={{ base: "70%", lg: "85%", xl: "60%" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex flexDirection="column" color="white" mt="25px">
          <Text
            className="calibre"
            fontSize="20px"
            as={motion.h1}
            initial={{ opacity: 0 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
            whileInView={{ opacity: 1 }}
          >
            {data[language].aboutMe[1]}
          </Text>
          <Text
            className="calibre"
            fontSize="20px"
            as={motion.h1}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {data[language].aboutMe[2]}
          </Text>
          <Text
            className="calibre"
            fontSize="20px"
            as={motion.h1}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {data[language].aboutMe[3]}
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          w="100%"
          h="100%"
          gap={6}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            width={{ base: "230px", lg: "300px" }}
            height={{ base: "240px", lg: "270px" }}
            pl="10px"
            mt={{ base: "20px" }}
            mb={{ base: "20px" }}
            as={motion.img}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s,all ease-in-out .5s"
            src={hernan}
            alt="Hernan Lorenzo"
            borderRadius="15px"
            filter="grayscale(100%)"
            boxShadow="rgba(10, 70, 110,0.5) 5px 5px, rgba(10, 70, 110, 0.3) 10px 10px, rgba(10, 70, 110, 0.2) 15px 15px, rgba(10, 70, 110, 0.1) 20px 20px, rgba(10, 70, 110, 0.05) 25px 25px;"
            _hover={{ filter: "grayscale(15%)" }}
          />
          <Button
            w={{ base: "100", lg: "80%", xl: "70%" }}
            h="50px"
            as={motion.button}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            variant="outline"
            className="sf"
            colorScheme="messenger"
            _hover={{ fontWeight: "bold" }}
            fontSize={{ base: "1rem", lg: "0.9rem", md: "1.2rem" }}
          >
            {data[language].aboutMe[4]}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutMe;

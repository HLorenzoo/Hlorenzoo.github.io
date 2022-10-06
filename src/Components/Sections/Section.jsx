import React from "react";
import { Divider, Flex, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import hernan from "../../assets/images/hernan.png";
import useAppContext from "../../context/context";
import AboutMe from "./AboutMe";

const Section = ({ data }) => {
  const { language, setlanguage } = useAppContext();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h={{ base: "820px", md: "100%" }}
      bgColor="#0e1015"
      mt="45px"
    >
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
          0.1
        </Text>
        <Text
          color="white"
          className="calibre"
          fontWeight="bold"
          pl={{ base: "10px" }}
          fontSize={{ base: "1.5rem", md: "2rem" }}
        >{`${data[language].navbar[1]}`}</Text>
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
      <Flex
        alignItems="center"
        justifyContent="center"
        w={{base:"70%",md:'60%'}}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex flexDirection="column" color="white">
          <Text  className="calibre" fontSize='20px'
            as={motion.h1}
            initial={{ opacity: 0 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
            whileInView={{ opacity: 1 }}
          >
            {data[language].aboutMe[1]}
          </Text>
          <Text className="calibre" fontSize='20px'
            as={motion.h1}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {data[language].aboutMe[2]}
          </Text>
          <Text className="calibre" fontSize='20px'
            as={motion.h1}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {data[language].aboutMe[3]}
          </Text>
        </Flex>
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
      </Flex>
    </Flex>
  );
};

export default Section;

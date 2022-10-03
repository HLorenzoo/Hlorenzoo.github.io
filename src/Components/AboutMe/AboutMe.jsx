import { Divider, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useAppContext from "../../context/context";

const AboutMe = ({ data }) => {
  const { language, setlanguage } = useAppContext();
  return (
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
      <Text>
        0.1
        <span style={{ color: "white", fontSize: "1.5rem" }}>
          {`  ${data[language].navbar[1]}`}
        </span>
      </Text>
      <Divider ml="10px" mt="20px" w="80%" />
    </Flex>
  );
};

export default AboutMe;

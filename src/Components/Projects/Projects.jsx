import { Flex } from "@chakra-ui/react";
import React from "react";
import useAppContext from "../../context/context";
import TitleSection from "../AboutMe/TitleSection";
const Projects = ({ data }) => {
  const { language, setlanguage } = useAppContext();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h={{ base: "100%", md: "100%" }}
      bgColor="#0e1015"
      mt="45px"
      mb="45px"
    >
      <TitleSection data={data} n={2} />
    </Flex>
  );
};

export default Projects;

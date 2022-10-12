import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import useAppContext from "../../context/context";
import TitleSection from "../AboutMe/TitleSection";
import portfolio from "../../assets/images/portfolio.png";
import wow from "../../assets/images/wow.png";
import "./project.css";
import Loader from "../Loader/Loader";
import Logo from "../Logo/Logo";
import Card from "./Card";
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
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
        gap={{ base: "4", sm: "8", md: "10", lg: "12" }}
        mt="3rem"
        ml={{ base: "1rem", sm: "2rem", md: "6rem", lg: "6rem" }}
        mr={{ base: "0rem", sm: "2rem", md: "6rem", lg: "6rem" }}
        pl={{ base: ".2rem", sm: ".5rem" }}
        pr={{ base: ".2rem", sm: ".5rem" }}
        mb={{ base: "6rem", md: "8rem" }}
        width={{base:"85vw",md:'80vw'}}
      >
        <Card
          image={portfolio}
          proyecto="Portfolio"
          tecnologias="ChakraUI - ReactJS - FramerMotion"
          description={data[language].projects.projects[0].description}
        />
        <Card
          image={wow}
          proyecto={data[language].projects.projects[1].name}
          tecnologias="ChakraUI - ReactJS - FramerMotion"
          description={data[language].projects.projects[1].description}
        />
        <Card
          image={wow}
          proyecto="Revista WOW"
          tecnologias="ChakraUI - ReactJS - FramerMotion"
          description="Portafolio creado con react, utilizando un frameworks como ChakraUI y FramerMotion"
        />
        <Card
          image={wow}
          proyecto="Revista WOW"
          tecnologias="ChakraUI - ReactJS - FramerMotion"
          description="Portafolio creado con react, utilizando un frameworks como ChakraUI y FramerMotion"
        />
      </Grid>
    </Flex>
  );
};

export default Projects;

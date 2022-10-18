import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import useAppContext from "../../context/context";
import TitleSection from "../AboutMe/TitleSection";
import portfolio from "../../assets/images/portfolio.png";
import wow from "../../assets/images/wow.png";
import tmdb from "../../assets/images/tmdb.png";
import ecom from "../../assets/images/ecom.png";
import "./project.css";
import Loader from "../Loader/Loader";
import Logo from "../Logo/Logo";
import Card from "./Card";
import github from "../../assets/icons/github.png";
import click from "../../assets/icons/click.png";

const Projects = ({ data }) => {
  const { language, setlanguage } = useAppContext();

  return (
    <Flex
      id="proyectos"
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
        width={{ base: "85vw", md: "80vw" }}
      >
        <Card img={github}
          image={portfolio}
          proyecto="Portfolio"
          tecnologias="ChakraUI - ReactJS - FramerMotion"
          description={data[language].projects.projects[0].description}
          link={data[language].projects.projects[0].linkGit}
        />
        <Card img={click}
          link={data[language].projects.projects[1].linkWeb}
          image={wow}
          proyecto={data[language].projects.projects[1].name}
          tecnologias="ChakraUI - ReactJS - NextJS - Strapi"
          description={data[language].projects.projects[1].description}
        />
        <Card img={github}
          link={data[language].projects.projects[2].linkGit}
          image={ecom}
          proyecto={data[language].projects.projects[2].name}
          tecnologias="MongoDB - Express - NodeJS - ReactJS - Redux - MUI - JWT"
          description={data[language].projects.projects[2].description}
        />
        <Card img={github}
          link={data[language].projects.projects[3].linkGit}
          image={tmdb}
          proyecto={data[language].projects.projects[3].name}
          tecnologias="MongoDB - Express - NodeJS - ReactJS - Redux - MUI - JWT"
          description={data[language].projects.projects[3].description}
        />
      </Grid>
    </Flex>
  );
};

export default Projects;

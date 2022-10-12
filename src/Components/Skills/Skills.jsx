import { Flex, Grid, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useAppContext from "../../context/context";
import TitleSection from "../AboutMe/TitleSection";
import node from "../../assets/skills/node.png";
import express from "../../assets/skills/express.png";
import sequelize from "../../assets/skills/sequelize.png";
import postgresql from "../../assets/skills/postgresql.png";
import mongo from "../../assets/skills/mongo.png";
import mongoose from "../../assets/skills/mongoose.png";
import jwt from "../../assets/skills/jwt.png";
import socket from "../../assets/skills/socket.png";
import docker from "../../assets/skills/docker.png";
import npm from "../../assets/skills/npm.png";
import react from "../../assets/skills/react.png";
import next2 from "../../assets/skills/next2.png";
import redux from "../../assets/skills/redux.png";
import sass from "../../assets/skills/sass.png";
import git from "../../assets/skills/git.png";
import chakra from "../../assets/skills/chakra.png";
import fondo from "../../assets/skills/fondo.png";
import mui from "../../assets/skills/mui.png";
const arr = [
  node,
  express,
  sequelize,
  postgresql,
  mongo,
  mongoose,
  jwt,
  socket,
  docker,
  react,
  redux,
  chakra,
  next2,
  sass,
  npm,
  git,
];
const Skills = ({ data }) => {
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
      <TitleSection data={data} n={3} />
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Grid
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          w={{ base: "90%", md: "75%" }}
          templateColumns={{ base: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
          gap={{ base: "8", md: "12", lg: "20" }}
          mt="3rem"
          ml={{ base: "2rem", md: "6rem", lg: "6rem" }}
          mr={{ base: "2rem", md: "6rem", lg: "6rem" }}
          pl={{ base: "1.2rem" }}
          pr={{ base: ".5rem" }}
          mb={{ base: "2rem", md: "4rem" }}
        >
          {arr.map((skill, i) => {
            return (
              <Box
                as={motion.div}
                className="skills"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                key={i}
                filter="grayscale(0.9)"
                transition="all .8s ease-in-out"
                w={{ sm: "152px", m: "190px", md: "235px" }}
                h={{ sm: "65px", m: "81px", md: "101px" }}
                _hover={{
                  filter: "grayscale(0)",
                  transform: { base: "scale(1.25)", lg: "scale(1.10)" },
                }}
              >
                <Image src={skill} alt="skill" p={1} />
              </Box>
            );
          })}
        </Grid>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          filter="grayscale(0.9)"
          transition="all .8s ease-in-out"
          _hover={{
            filter: "grayscale(0)",
            transform: { base: "scale(1.25)", lg: "scale(1.10)" },
          }}
          className="skills"
        >
          <Image src={mui} h={{ base: "70px", md: "150px" }} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Skills;

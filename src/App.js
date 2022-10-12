import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Box,
  keyframes,
  Divider,
  Image,
} from "@chakra-ui/react";
import Logo from "./Components/Logo/Logo";
import { motion } from "framer-motion";
import Typed from "react-typed";
import Navbar from "./Components/Navbar/Navbar";
import { MotionConfig } from "framer-motion";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import theme from "./theme";

import data from "./data";
import TitleSection from "./Components/AboutMe/TitleSection";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Github from "./assets/icons/github.png";
import wp from "./assets/icons/wp.png";
import Linkedin from "./assets/icons/linkedin.png";
function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 6000);
  }, []);
  return (
    <>
      {/* {show ? (
        <Flex flexDirection="column" bgColor="#0e1015" h="100vh" p={0} m={0}>
          <Loader />
        </Flex>
      ) : ( */}
      <ChakraProvider theme={theme}>
        <Flex flexDirection="column" bgColor="#0e1015" p={0} m={0}>
          <Navbar />
          <Flex
            display={{ base: "none", md: 'flex' }}
            position="fixed"
            zIndex={999}
            h="100vh"
            left="4rem"
            flexDirection="column"
            mt="400px"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
          >
            <Flex flexDirection="column" gap={2} mb="10px">
              <Box
                filter="grayscale(0.2)"
                cursor="pointer"
                transition="all .5s ease-out"
                _hover={{
                  filter: "grayscale(0)",
                  transform: { base: "scale(1.25)", lg: "scale(1.10)" },
                }}
              >
                <Image src={Github} w="33px" h="33px" />
              </Box>
              <Box
                filter="grayscale(0)"
                cursor="pointer"
                transition="all .5s ease-out"
                _hover={{
                  filter: "grayscale(0)",
                  transform: { base: "scale(1.25)", lg: "scale(1.10)" },
                }}
              >
                <Image src={Linkedin} w="33px" h="33px" />
              </Box>
              <Box
                filter="grayscale(0.2)"
                cursor="pointer"
                transition="all .5s ease-out"
                _hover={{
                  filter: "grayscale(0)",
                  transform: { base: "scale(1.25)", lg: "scale(1.10)" },
                }}
              >
                <Image src={wp} w="33px" h="33px" />
              </Box>
              <Box
                filter="grayscale(0.2)"
                cursor="pointer"
                transition="all .5s ease-out"
                _hover={{
                  filter: "grayscale(0)",
                  transform: { base: "scale(1.25)", lg: "scale(1.10)" },
                }}
              >
                <Image src={Github} w="33px" h="33px" />
              </Box>
            </Flex>

            <Divider
              as={motion.hr}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              borderWidth="1.5px"
              transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
              borderColor="#19b1ff"
              orientation="vertical"
              h="40%"
            />
          </Flex>
          <Box bgColor="#0e1015" mt="100px" h="100%">
            <Header data={data} />
          </Box>
          <Flex
            h="100%"
            bgColor="#0e1015"
            justifyContent="center"
            flexDirection="column"
          >
            <AboutMe data={data} />
            <Projects data={data} />
            <Skills data={data} />
            <Contact data={data} />
          </Flex>
        </Flex>
      </ChakraProvider>
      {/* )} */}
    </>
  );
}

export default App;

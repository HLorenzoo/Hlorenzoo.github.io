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
import TitleSection from "./Components/Sections/TitleSection";
import AboutMe from "./Components/Sections/AboutMe";
import Section from "./Components/Sections/Section";

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
      {show ? (
        <Flex flexDirection="column" bgColor="#0e1015" h="100vh" p={0} m={0}>
          <Loader />
        </Flex>
      ) : (
        <ChakraProvider theme={theme}>
          <Flex flexDirection="column" bgColor="#0e1015" p={0} m={0}>
            <Navbar />
            <Box bgColor="#0e1015" mt="100px" h="100%">
              <Header data={data} />
            </Box>
            <Flex
              h="100%"
              bgColor="#0e1015"
              justifyContent="center"
              flexDirection="column"
            >
              <Section data={data} />
              {/* <TitleSection data={data} sectionPage={<AboutMe />} /> */}
            </Flex>
          </Flex>
        </ChakraProvider>
      )}
    </>
  );
}

export default App;

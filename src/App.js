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
import AboutMe from "./Components/AboutMe/AboutMe";
import data from "./data";

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
        <Loader />
      ) : (
        <ChakraProvider theme={theme}>
          <Flex flexDirection="column" bgColor="#171923" h="100vh" p={0} m={0}>
            <Navbar />
            <Box bgColor="#171923" h="100vh">
              <Header data={data} />
              <AboutMe />
            </Box>
          </Flex>
        </ChakraProvider>
      )}
    </>
  );
}

export default App;

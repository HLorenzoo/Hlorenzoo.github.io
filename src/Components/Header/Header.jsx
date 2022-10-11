import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Typed from "react-typed";
import video from "../../assets/background.mp4";
import "../Logo/logo.css";
import "../../index.css";
import { motion } from "framer-motion";
import useAppContext from "../../context/context";

const Header = ({ data }) => {
  const { language, setlanguage } = useAppContext();

  return (
    <div style={{ width: "100%", height: "100%", paddingBottom: "50px" }}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Box
          h={{ base: "500px", md: "750px" }}
          boxShadow="rgba(10, 70, 110, 0.4) 0px 5px, rgba(10, 70, 110, 0.3) 0px 10px, rgba(10, 70, 110, 0.2) 0px 15px, rgba(10, 70, 110, 0.1) 0px 20px, rgba(10, 70, 110, 0.05) 0px 25px"
        >
          <video
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              opacity: 0.5,
              clipPath:
                " polygon(14.3% 0.8%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)",
            }}
            src={video}
            autoPlay
            loop
            muted
          />
        </Box>
      </motion.div>

      <Flex
        className="content"
        top={{ base: "10%", md: "20%" }}
        // h={{ base: "410px", md: "450px" }}
        pt={{ base: "70px", md: "70px" }}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="sf"
            color="#19b1ff"
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 1.3s"
            fontWeight="bold"
            fontSize={{ base: "15px", lg: "1.5rem" }}
          >
            {data[language].init[0]}
          </Text>
          <Text
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 1.8s"
            color="white"
            fontSize={{ base: "40px", lg: "5rem" }}
            className="calibre"
          >
            Hernan Lorenzo.
          </Text>
          <Flex flexDirection="row">
            <Text
              as={motion.p}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 2.2s"
              color="white"
              fontSize="2rem"
              className="calibre"
            >
              <small style={{ color: "#19b1ff" }}>
                <Typed
                  className="sf"
                  strings={[
                    "Full Stack",
                    "MERN",
                    "PERN",
                    "Node.js",
                    "React.js",
                    "Next.js",
                  ]}
                  typeSpeed={150}
                  backSpeed={50}
                  loop
                />
              </small>
              Developer
            </Text>
          </Flex>
          <Text
            pt={{ lg: "15px" }}
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 2.5s"
            color="white"
            w={{ base: "50%", lg: "50%" }}
            className="sf"
            fontSize={{ base: "1rem", lg: "1.5rem" }}
          >
            {data[language].init[3]}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;

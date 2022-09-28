import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Typed from "react-typed";
import video from "../../assets/background.mp4";
import "../Logo/logo.css";
import "../../index.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div style={{ width: "100%", height: "70%" }}>
      <motion.div
        style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            opacity: 0.5,
          }}
          src={video}
          autoPlay
          loop
          muted
        />
      </motion.div>

      <Flex className="content" pt={{ base: "30px", md: "100px" }}>
        <Flex flexDirection="column" pl={{ base: "25px", md: "250px" }}>
          <Text
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="sf"
            color="#19b1ff"
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 1.3s"
            fontWeight="bold"
            fontSize={{ base: "15px", md: "1.5rem" }}
          >
            Hello World! My name is
          </Text>
          <Text
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 1.8s"
            color="white"
            fontSize={{ base: "40px", md: "5rem" }}
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
              fontSize="2.5rem"
              className="calibre"
            >
              <small style={{ color: "#19b1ff" }}>
                <Typed
                  className="sf"
                  strings={[
                    "Full Stack Web",
                    "Node.js",
                    "MERN",
                    "PERN",
                    "React.js",
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
            pt={{ md: "15px" }}
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 2.5s"
            color="white"
            w={{ base: "100%", md: "50%" }}
            className="sf"
            fontSize={{ base: "15px", md: "1.5rem" }}
          >
            I'm an Argentinian software developer with a goal-driven creative
            mindset
          </Text>
        </Flex>
        <span class="cloud">
          <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"></script>
        </span>
      </Flex>
    </div>
  );
};

export default Header;

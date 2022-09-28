import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Typed from "react-typed";
import video from "../../assets/background.mp4";
import "../Logo/logo.css";
import "../../index.css";
const Header = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* <div className="overlay"></div> */}
      <video
        style={{
          width: "100%",
          height: "70%",
          objectFit: "fill",
          opacity: 0.7,
        }}
        src={video}
        autoPlay
        loop
        muted
      />
      <Flex className="content" pt={{ base: "30px", md: "100px" }}>
        <Flex
          flexDirection="column"
          alignItems={"center"}
          pl={{ base: "25px", md: "100px" }}
        >
          <Text
            className="sf"
            color="#19b1ff"
            as="h1"
            fontWeight="bold"
            fontSize={{ base: "15px", md: "18px" }}
          >
            Hello World! My name is
          </Text>
          <Text
            as="h1"
            color="white"
            fontSize={{ base: "40px", md: "45px" }}
            className="calibre"
          >
            Hernan Lorenzo.
          </Text>
          <Flex flexDirection="row">
            <Text as="h1" color="white" fontSize="30px" className="calibre">
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
            as="h1"
            color="white"
            w={{ base: "100%", md: "50%" }}
            className="sf"
            fontSize={{ base: "15px", md: "18px" }}
          >
            I'm an Argentinian software developer with a goal-driven creative
            mindset and passion for learning and innovating. Currently ending a
            Bootcamp from Plataforma 5.
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

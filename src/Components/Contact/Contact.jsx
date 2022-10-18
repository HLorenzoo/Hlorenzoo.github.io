import {
  Box,
  Button,
  Divider,
  Flex,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useAppContext from "../../context/context";
import TitleSection from "../AboutMe/TitleSection";
import github from "../../assets/icons/github.png";
import wp from "../../assets/icons/wp.png";
import msn from "../../assets/icons/msn.png";
import linkedin from "../../assets/icons/linkedin.png";
const Contact = ({ data }) => {
  const { language, setlanguage } = useAppContext();
  return (
    <Flex
      id="contact"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h={{ base: "100%", md: "100%" }}
      bgColor="#0e1015"
      mt="45px"
    >
      <TitleSection data={data} n={5} />
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text
          as={motion.h1}
          transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.10s"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="calibre"
          fontSize={{ base: "2.8rem", md: "3rem" }}
          color="#19b1ff"
          fontWeight="extrabold"
        >
          {language === "es" ? "Contacto" : "Get In Touch"}
        </Text>
        <Text
          as={motion.h1}
          transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          color="white"
          className="calibre"
          fontSize={{ base: "1.1rem", md: "1.5rem" }}
          w="50%"
          textAlign="center"
        >
          {language === "es"
            ? "Estoy abierto a ofertas laborales o cualquier pregunta que pueda tener "
            : "I’m currently looking for a job opportunitie,my inbox is always open.I'm happy to answer any questions you may have.."}
        </Text>
        <Link href="mailto:lorenzoestebanhernan@gmail.com" isExternal>
          <Button
            display={{ base: "none", md: "block" }}
            mt="20px"
            mb="10px"
            w={{ base: "100", md: "250px" }}
            h="50px"
            as={motion.button}
            transition="opacity 0.7s cubic-bezier(0.5, 0, 0, 1) 0.25s"
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            variant="outline"
            className="sf"
            colorScheme="messenger"
            _hover={{ fontWeight: "bold" }}
            fontSize={{ base: "1rem", lg: "0.9rem", md: "1.2rem" }}
          >
            {language === "es" ? "Saludame" : "Say Hello"}
          </Button>
        </Link>
        <Flex
          as={motion.div}
          gap={4}
          p={3}
          display={{ base: "flex", md: "none" }}
          transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.10s"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Box
            filter="grayscale(0.2)"
            cursor="pointer"
            transition="all .5s ease-out"
            _hover={{
              filter: "grayscale(0)",
              transform: { base: "scale(1.25)", lg: "scale(1.10)" },
            }}
          >
            <Link href="https://github.com/HLorenzoo/" isExternal>
              <Image src={github} w="33px" h="33px" />
            </Link>
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
            <Link
              href="https://www.linkedin.com/in/hernan-lorenzo-044b02240/"
              isExternal
            >
              <Image src={linkedin} w="33px" h="33px" />
            </Link>
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
            <Link href=" https://wa.me/+543816977428" isExternal>
              <Image src={wp} w="33px" h="33px" />
            </Link>
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
            <Link href="mailto:lorenzoestebanhernan@gmail.com" isExternal>
              <Image src={msn} w="33px" h="33px" />
            </Link>
          </Box>
        </Flex>

        <Divider mt={{ md: "35px" }} borderColor="#19b1ff" />
        <Link
          href="https://www.linkedin.com/in/hernan-lorenzo-044b02240/"
          isExternal
        >
          <Text
            as={motion.h1}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            color="white"
            mt="5px"
            className="calibre"
            p={3}
            fontSize="0.9rem"
            cursor="pointer"
            _hover={{ color: "#19b1ff" }}
          >
            {language === "es"
              ? "Diseñado y desarrolado por Hernan Lorenzo"
              : " Designed & developed by Hernan Lorenzo"}
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Contact;

import { ReactNode } from "react";
import {
  Box,
  Flex,
  useDisclosure,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Typed from "react-typed";
import "./loader.css";
import Logo from "../Logo/Logo";
import ButtonSection from "./Button";
import SideBar from "./SideBar/SideBar";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const hl = "<HL/>";
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as={motion.div}
        initial={{ y: "50%", opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        className="navbar"
        p={4}
        position="sticky"
        top={0}
      >
        <Flex h={16} alignItems={"center"} justifyContent="space-between">
          <Box className="loader" pl="20px">
            <Logo />
          </Box>

          <Flex alignItems={"center"}>
            <ButtonSection />
            <SideBar />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;

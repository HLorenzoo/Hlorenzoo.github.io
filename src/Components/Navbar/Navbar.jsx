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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition="1.5s"
        p={4}
        className="navbar"
        position="sticky"
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

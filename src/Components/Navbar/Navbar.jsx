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
import ButtonSection from "./ButtonSection";
import SideBar from "./SideBar/SideBar";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import data from "../../data";
import Languages from "./SideBar/Languages";
import DrawerLanguages from "./SideBar/DrawerLanguages";
import LanguageDrawer from "./SideBar/Drawer/LanguageDrawer";
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
        position="fixed"
        w="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent="space-between">
          <Box className="loader" pl="20px">
            <Logo />
          </Box>

          <Flex>
            <ButtonSection data={data} />

            <LanguageDrawer />

            <SideBar />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;

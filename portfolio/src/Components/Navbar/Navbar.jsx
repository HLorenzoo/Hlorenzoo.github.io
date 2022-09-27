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
const Navbar = () => {
  const hl = "<HL/>";
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="navbar" p={4} position='sticky' top={0}>
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

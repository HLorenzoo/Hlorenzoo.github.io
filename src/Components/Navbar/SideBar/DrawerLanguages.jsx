import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Image,
  Flex,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Esp } from "../../../assets/icons/Icon";
import Languages from "./Languages";
import { WarningIcon } from "@chakra-ui/icons";
import useAppContext from "../../../context/context";
const DrawerLanguages = () => {
  const { language, setlanguage } = useAppContext();

  return (
    <Menu>
      <MenuButton pb="30px" h="100%">
        <Languages />
      </MenuButton>
      <MenuList ml={{ base: "200px", lg: "0" }} w="20%" bgColor="#222531">
        <MenuGroup color="white" title="Idiomas/Languages">
          <MenuItem>
            <Box onClick={() => setlanguage("es")}>
              <Flex alignItems="center">
                <Image w="10%" src="https://freesvg.org/img/1529053930.png" />

                <Text color="#1D6E9C" as={"h4"}>
                  |ES
                </Text>
              </Flex>
            </Box>
          </MenuItem>
          <MenuItem>
            <Box onClick={() => setlanguage("en")}>
              <Flex alignItems="center">
                <Image
                  borderRadius="200px"
                  w="10%"
                  src="https://i.ibb.co/KxmbQTh/image.png"
                />

                <Text color="#1D6E9C" as={"h4"}>
                  |EN
                </Text>
              </Flex>
            </Box>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default DrawerLanguages;

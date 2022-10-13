import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Stack,
  Button,
  Flex,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverTrigger,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import React from "react";
import useAppContext from "../../context/context";
import CustomButton from "./SideBar/CustomButton";
import DrawerLanguages from "./SideBar/DrawerLanguages";

const ButtonSection = ({ data }) => {
  const { language, setlanguage } = useAppContext();
  console.log(language);
  return (
    <Stack
      direction={"row"}
      spacing={2}
      display={{ base: "none", lg: "flex" }}
      className="sf"
    >
      <DrawerLanguages />

      <CustomButton id='#inicio' n={0.1} name={data[language].navbar[0]} />
      <CustomButton id='#aboutme' n={0.2} name={data[language].navbar[1]} />
      <CustomButton id='#proyectos' n={0.3} name={data[language].navbar[2]} />
      <CustomButton id='#skills' n={0.4} name={data[language].navbar[3]} />
      <CustomButton id='#contact' n={0.5} name={data[language].navbar[4]} />
    </Stack>
  );
};

export default ButtonSection;

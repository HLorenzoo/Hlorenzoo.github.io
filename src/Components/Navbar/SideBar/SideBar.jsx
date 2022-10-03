import React from "react";

import { Flex } from "@chakra-ui/react";

import DrawerSectionm from "./Drawer/Drawer";
import Languages from "./Languages";
const SideBar = () => {
  return (
    <Flex flexDirection="column" display={{ lg: "none" }}>
      <DrawerSectionm />
    </Flex>
  );
};

export default SideBar;

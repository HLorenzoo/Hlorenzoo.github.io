import React from "react";

import { Box } from "@chakra-ui/react";

import DrawerSectionm from "./Drawer/Drawer";
const SideBar = () => {
  return (
    <Box display={{ md: "none" }}>
      <DrawerSectionm />
    </Box>
  );
};

export default SideBar;

import { Stack, Button } from "@chakra-ui/react";
import React from "react";
import "./loader.css";
import CustomButton from "./SideBar/CustomButton";

const ButtonSection = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      display={{ base: "none", md: "flex" }}
      className="sf"
    >
      <CustomButton n={0.1} name={"Home"} />
      <CustomButton n={0.2} name={"About"} />
      <CustomButton n={0.3} name={"Skills"} />
      <CustomButton n={0.4} name={"Projects"} />
      <CustomButton n={0.5} name={"Contact"} />
    </Stack>
  );
};

export default ButtonSection;

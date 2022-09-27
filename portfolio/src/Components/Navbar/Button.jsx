import { Stack, Button } from "@chakra-ui/react";
import React from "react";
import "./loader.css";
const ButtonSection = () => {
  return (
    <Stack direction={"row"} spacing={2} display={{ base: "none", md: "flex" }}>
      <Button
        height="48px"
        width="100px"
        borderTop="2px"
        borderColor="#19b1ff"
        className=" hvr-underline-from-left"
      >
        <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.1 </small>Home
      </Button>
      <button class="button type3">
        <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.2 </small>About
      </button>
      <button class="button type3">
        {" "}
        <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.3</small> Skills
      </button>

      <div class="center">
        <button class="btn">
          <svg width="120px" height="60px" viewBox="0 0 120 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>
            <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.4</small>{" "}
            Projects
          </span>
        </button>
      </div>

      <button class="button type3">
        {" "}
        <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.5</small>{" "}
        Contact
      </button>
    </Stack>
  );
};

export default ButtonSection;

import { Stack, Button } from "@chakra-ui/react";
import React from "react";
import "./SlideDrawer.css";

const SlideDrawer = ({ show }) => {
  let drawerClasses = show ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <Stack
        mt="20px"
        spacing={12}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="space-between"
      >
        <button className="hvr-underline-from-left" style={{ width: "200px" }}>
          <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.1 </small>
          <p style={{ color: "white" }}>Home</p>
        </button>
        <button className="hvr-underline-from-left" style={{ width: "200px" }}>
          <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.2 </small>
          <p style={{ color: "white" }}>About</p>
        </button>
        <button className="hvr-underline-from-left" style={{ width: "200px" }}>
          <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.3</small>
          <p style={{ color: "white" }}>Skills</p>
        </button>
        <button className="hvr-underline-from-left" style={{ width: "200px" }}>
          <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.4</small>
          <p style={{ color: "white" }}>Projects</p>
        </button>
        <button className="hvr-underline-from-left" style={{ width: "200px" }}>
          <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.5</small>
          <p style={{ color: "white" }}>Contact</p>
        </button>
        <Button w="150px" colorScheme="linkedin" variant="outline">
          CV
        </Button>
      </Stack>
    </div>
  );
};

export default SlideDrawer;

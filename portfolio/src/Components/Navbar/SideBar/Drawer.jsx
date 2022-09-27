import React, { useState } from "react";
import {
  Drawer,
  Flex,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  IconButton,
  Box,
  Center,
  Divider,
} from "@chakra-ui/react";
import { Spin as Hamburger } from "hamburger-react";
import "./drawer.css";

const DrawerMenu = () => {
  let drawerClasses = drawerOpen ? "side-drawer open" : "side-drawer";
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleOpenDrawerButton() {
    setDrawerOpen(!drawerOpen);
  }

  function handleBackdropClick() {
    setDrawerOpen(false);
  }

  // toggle burger menu change
  /*   const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  }; */
  return (
    <Box>
      {/* <Box position="absolute" right={10}>
        <Hamburger
          position="absolute"
          color="#05acff"
          onToggle={(toggled) => {
            if (toggled) {
              onOpen();
            } else {
              onClose();
            }
          }}
        />
      </Box> */}
      <div className="burger-menu">
        <Hamburger
          position="absolute"
          color="#05acff"
          onToggle={(toggled) => {
            if (toggled) {
            } else {
            }
          }}
        />
      </div>
      <div >
        <div className={drawerClasses}>
          <h1 style={{ color: "white" }}>Hello, I'm a drawer!</h1>
        </div>
      </div>
      {/*  <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu.</DrawerHeader>
          <Center height="50px">
            <Divider orientation="horizontal" />
          </Center>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <button style={{ height: "100px", width: "200px" }}>
              <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.1 </small>
              <p>Home</p>
            </button>
            <button style={{ height: "100px", width: "200px" }}>
              <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.2 </small>
              <p>About</p>
            </button>
            <button style={{ height: "100px", width: "200px" }}>
              <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.3</small>
              <p>Skills</p>
            </button>
            <button style={{ height: "100px", width: "200px" }}>
              <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.4</small>
              <p>Projects</p>
            </button>
            <button style={{ height: "100px", width: "200px" }}>
              <small style={{ color: "#19b1ff", fontSize: "13px" }}>0.5</small>
              <p>Contact</p>
            </button>
            <Button w="150px" colorScheme="linkedin" variant="outline">
              CV
            </Button>
          </Box>
        </DrawerContent>
      </Drawer> */}
    </Box>
  );
};

export default DrawerMenu;

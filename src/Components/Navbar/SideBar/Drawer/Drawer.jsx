import { Sling as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import Backdrop from "./Backdrop";

import SlideDrawer from "./SlideDrawer";
const DrawerSectionm = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleOpenDrawerButton() {
    setDrawerOpen(!drawerOpen);
  }

  function handleBackdropClick() {
    setDrawerOpen(false);
  }

  return (
    <div>
      <SlideDrawer show={drawerOpen} />
      {drawerOpen && <Backdrop closeDrawer={handleBackdropClick} />}
      <button onClick={handleOpenDrawerButton}>
        <Hamburger
          position="absolute"
          top={30}
          right={30}
          color="#05acff"
          duration={1}
        />
      </button>
    </div>
  );
};

export default DrawerSectionm;

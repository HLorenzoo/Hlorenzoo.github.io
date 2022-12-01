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
  window.onclick = function (e) {
    e.screenY > 250 && setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <SlideDrawer show={drawerOpen} />
      {/* {drawerOpen && <Backdrop closeDrawer={handleBackdropClick} />} */}
      <button onClick={handleOpenDrawerButton}>
        <Hamburger
          position="absolute"
          top={30}
          right={30}
          color="#05acff"
          duration={1}
          toggled={drawerOpen}
        />
      </button>
    </div>
  );
};

export default DrawerSectionm;

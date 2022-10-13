import React from "react";
import { World } from "../../../../assets/icons/Icon";
import { IoLanguage } from "react-icons/io5";
const IconButton = () => {
  return (
    <div className="center">
      <button className="btn">
        <svg width="120px" height="60px" viewBox="0 0 120 60" className="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <IoLanguage />
      </button>
    </div>
  );
};

export default IconButton;

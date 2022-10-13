import { Link } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ n, name,id }) => {
  return (
    <div class="center">
      <Link href={id}>
        <button class="btn">
          <svg width="120px" height="60px" viewBox="0 0 120 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span style={{ fontSize: "15px" }}>
            <small
              className="sf"
              style={{ color: "#19b1ff", fontSize: "13px" }}
            >
              {n}
            </small>
            {` ${name}`}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;

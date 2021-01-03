import React from "react";

export const LogoSVG: React.FC = ({ ...props }) => {
  return (
    <a href="/#">
      <img
        src={require("./logo.png")}
        style={{ width: "15%", marginTop: "10px" }}
        alt=""
      />
    </a>
  );
};

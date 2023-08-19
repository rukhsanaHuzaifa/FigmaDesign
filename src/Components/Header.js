import React from "react";
import globe from "./Images/globe.png";
import "./Style.css";

const Header = () => {
  return (
    <div className="rect1 pt-2">
      <img className="text" src={globe} alt="globe" />
      <p className="text ms-2">my travel journal.</p>
    </div>
  );
};

export default Header;

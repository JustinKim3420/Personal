import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ setButtonClicked , buttonClicked }) => {
  const handleLogoClick = (event) => {
    if (buttonClicked === true && event.target.className === "logo") {
      setButtonClicked(false);
    }
  };

  return (
    <Link className="logo" to="/" onClick={(event)=>{handleLogoClick(event)}}>
      JK
    </Link>
  );
};

export default Logo;

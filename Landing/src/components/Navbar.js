import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import NavbarItems from "./NavbarItems";
import Burger from "./Burger";

const Navbar = ({ buttonClicked, setButtonClicked, navItems }) => {
  const handleBurger = () => {
    setButtonClicked(!buttonClicked);
    if (buttonClicked === false) {
      document.body.style.overflowY = "hidden";
    }else{
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <Burger buttonClicked={buttonClicked} setButtonClicked={handleBurger} />
        <NavbarItems navItems={navItems} />
        <Logo />
        <Socials />
      </nav>
    </div>
  );
};

export default Navbar;

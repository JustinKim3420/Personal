import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import NavbarItems from "./NavbarItems";
import Burger from "./Burger";

const navItems = ["Home", "Projects", "Contacts"];

const Navbar = ({ buttonClicked, setButtonClicked }) => {
  return (
    <nav className="navbar">
      <Burger
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
      <NavbarItems navItems={navItems} />
      <Logo />
      <Socials />
    </nav>
  );
};

export default Navbar;

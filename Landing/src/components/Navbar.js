import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import NavbarItems from "./NavbarItems";
import Burger from "./Burger";


const Navbar = ({ buttonClicked, setButtonClicked, navItems }) => {
  return (
    <div className='container'>
      <nav className="navbar">
        <Burger
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
        <NavbarItems navItems={navItems} />
        <Logo />
        <Socials />
      </nav>
    </div>
  );
};

export default Navbar;

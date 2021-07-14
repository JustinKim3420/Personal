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
      document.body.style.overflowX = "hidden";
    }else{
      document.body.style.overflowY = "auto";
    }
  };

  const handleNavClick = (event)=>{
    if(buttonClicked===true && event.target.className==='navbar'){
      handleBurger()
    }
  }

  return (
    <div className="container">
      <nav className="navbar" onClick={(event)=>{handleNavClick(event)}}>
        <Burger buttonClicked={buttonClicked} setButtonClicked={handleBurger} />
        <NavbarItems navItems={navItems} />
        <Logo setButtonClicked={setButtonClicked} buttonClicked={buttonClicked}/>
        <Socials />
      </nav>
    </div>
  );
};

export default Navbar;

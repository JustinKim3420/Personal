import React from "react";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
import Socials from './Socials'

const navItems=[
    'Profile',
    'Projects',
    'Contacts'
]

const Navbar = () => {
     return(
  <div className='navbar'>
    item
    {/* <NavbarItems navItems={navItems}/> */}
    {/* <Logo />
    <Socials /> */}
  </div>)
};

export default Navbar;

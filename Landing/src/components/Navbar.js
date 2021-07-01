import React from "react";
import Logo from "./Logo";
import Socials from './Socials'
import NavbarItems from "./NavbarItems";
import Burger from './Burger'

const navItems=[
    'Profile',
    'Projects',
    'Contacts'
]

const Navbar = () => {
     return(
  <nav className='navbar'>
    <Burger/>
    <NavbarItems navItems={navItems}/>
    <Logo />
    <Socials />
  </nav>)
};

export default Navbar;

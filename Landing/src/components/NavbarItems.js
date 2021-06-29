import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({ navItems }) => {
  return (
    <ul className='nav-items'>
      {navItems.map((item) => {
        return <li key={item} className='inline'><Link className='nav-item' to={item}>{item}</Link></li>;
      })}
    </ul>
  );
};

export default NavbarItems;

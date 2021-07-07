import React from "react";
import { Link } from "react-router-dom";

const Overlay = ({ buttonClicked, navItems }) => {
  return (
    <div className={buttonClicked ? "overlay transition" : "overlay"}>
      <ul
        className={buttonClicked ? "overlay-list transition" : "overlay-list"}
      >
        {navItems.map((item) => {
          return (
            <li key={item} className="overlay-list-item">
              <Link className="overlay-nav-item" to={`/${item}`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Overlay;

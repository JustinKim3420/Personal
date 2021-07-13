import React from "react";
import { Link } from "react-router-dom";

const Overlay = ({ buttonClicked, navItems, setButtonClicked }) => {
  const handleNavClick = ()=>{
    setButtonClicked(!buttonClicked)
    if (buttonClicked === false) {
      document.body.style.overflowY = "hidden";
    }else{
      document.body.style.overflowY = "auto";
    }
  }
  const handleResize = ()=>{
    if(window.innerWidth>=1028 && buttonClicked===true){
      setButtonClicked(false)
    }
  }
  window.addEventListener('resize', handleResize)


  const handleEmptyClick = (event)=>{
    if (buttonClicked === true && event.target.className.includes('overlay ')) {
      console.log('handleEmptyClick')
      setButtonClicked(false)
      document.body.style.overflowY = "auto";
    }
  }

  return (
    <div className={buttonClicked ? "overlay transition" : "overlay"} onClick={(event)=>{handleEmptyClick(event)}}>
      <ul
        className={buttonClicked ? "overlay-list transition" : "overlay-list"}
      >
        {navItems.map((item) => {
          return (
            <li key={item} className="overlay-list-item"  onClick={()=>handleNavClick()}>
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

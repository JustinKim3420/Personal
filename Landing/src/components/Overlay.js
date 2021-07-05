import React from "react";

const Overlay = ({buttonClicked, navItems}) => {
  return (
    <div className='container'>
      <div className="overlay">
          <div className='overlay-nav'>
              <ul className='overlay-list'>
                  {
                      navItems.map((item)=>{
                        return(
                            <li key={item} className='overlay-list-item'>{item}</li>
                        )
                      })
                  }
              </ul>
          </div>
      </div>
    </div>
  );
};

export default Overlay;

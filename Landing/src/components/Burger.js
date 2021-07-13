import React from "react";

const Burger = ({setButtonClicked, buttonClicked}) => {

  return (
    <button
      className={buttonClicked ? "burger whole-rotate" : "burger"}
      onClick={() => setButtonClicked(!buttonClicked)}
    >
      <div
        className={
          buttonClicked ? "burger-line transition-burger" : "burger-line"
        }
      ></div>
      <div
        className={
          buttonClicked ? "burger-line transition-burger" : "burger-line"
        }
      ></div>
      <div
        className={
          buttonClicked ? "burger-line transition-burger" : "burger-line"
        }
      ></div>
    </button>
  );
};

export default Burger;

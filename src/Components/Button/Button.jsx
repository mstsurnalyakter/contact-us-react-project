// eslint-disable-next-line no-unused-vars
import React from 'react'

import style from "./Button.module.css"

// eslint-disable-next-line react/prop-types
const Button = ({ text, icon, isBtn2 }) => {
  return (
    <>
      <button className={`${style.btn1} ${isBtn2 && style.btn2}`}>
        {icon}
        {text}
      </button>

      {/* <button className={`${style.btn}`}>
        {icon2}
        {text2}
      </button> */}
    </>
  );
};

export default Button
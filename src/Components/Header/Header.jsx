// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`${style.navigation} container`}>
      <section className={style.logo}>
        <img src="/images/download.png" alt="logo" />
      </section>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

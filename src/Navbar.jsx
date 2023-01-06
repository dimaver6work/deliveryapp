import React from "react";
import logo from "./assets/logo.png";
import search from "./assets/search-icon.svg";
import cart from "./assets/shopping-cart.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navL">
        <img src={logo} alt="logo" className="logo" />
        <div className="search">
          <input type="text" class="search-field" placeholder="Блюда" />
          <img src={search} alt="search" class="search-icon" />
        </div>
      </div>
      <div className="navR">
        <button>Войти</button>
        <div className="cart">
          <img src={cart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

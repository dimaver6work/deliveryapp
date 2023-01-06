import React from "react";
import logo from "./assets/logo.png";
import instagram from "./assets/instagram.svg";
import vk from "./assets/vk.svg";
import telegram from "./assets/telegram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerL">
        <img src={logo} alt={logo} />
        <a href="#">Доставка и оплата</a>
        <a href="#">Напишите нам</a>
      </div>
      <div className="footerR">
        <img src={telegram} alt={telegram} />
        <img src={vk} alt={vk} />
        <img src={instagram} alt={instagram} />
      </div>
    </div>
  );
};

export default Footer;

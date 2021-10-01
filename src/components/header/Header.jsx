import React from "react";
import "./header.css";
import logo from "../../images/white_logo_dark_background.jpg";

const Header = () => {
  return (
    <header className="">
      <div className="logo ">
        <img src={logo} alt="" />
      </div>
      <div className="sectionsHeader ">
        <ul className="">
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contactos">Contactos</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

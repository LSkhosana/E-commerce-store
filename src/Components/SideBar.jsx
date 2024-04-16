import React from "react";
import "../css/SideBar.css";
import logo from "../Assets/Logo.svg";
import menu from "../Assets/Menu.svg";
import home from "../Assets/Home.svg";
import bag from "../Assets/Bag.svg";
import navlink from "../Assets/NavLink.svg";

const SideBar = () => {
  return (
    <div className="navbar">
      <div className="nav-links-top">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu-icon">
          <div className="menu">
            <img src={menu} alt="Menu Icon" />
          </div>
        </div>
        <div className="home">
          <div className="home">
            <img src={home} alt="Home Icon" />
          </div>
        </div>
        <div className="Bag">
          <div className="Bag">
            <img src={bag} alt="Bag Icon" />
          </div>
        </div>
      </div>
      <div className="nav-link-bottom">
        <div className="nav-link-bottom">
          <img src={navlink} alt="Nav link Icon" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

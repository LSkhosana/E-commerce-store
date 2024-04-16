import React, { useState } from "react";
import "../css/SideBar.css";
import logo from "../Assets/Logo.svg";
import menu from "../Assets/Menu.svg";
import closeMenu from "../Assets/CloseMenu.svg";
import home from "../Assets/Home.svg";
import closeHome from "../Assets/CloseHome.svg"; // Import the close home icon
import bag from "../Assets/Bag.svg";
import closeBag from "../Assets/CloseBag.svg"; // Import the close bag icon
import navlink from "../Assets/NavLink.svg";
import closeNavLink from "../Assets/CloseNavLink.svg"; // Import the close nav link icon

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className={`nav-links-top ${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={isMenuOpen ? logo : logo} alt="Logo" />{" "}
          {/* Change the logo icon dynamically */}
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          <div className="menu">
            <img src={isMenuOpen ? closeMenu : menu} alt="Menu Icon" />{" "}
            {/* Change the menu icon dynamically */}
          </div>
        </div>
        <div className="home">
          <img src={isMenuOpen ? closeHome : home} alt="Home Icon" />{" "}
          {/* Change the home icon dynamically */}
        </div>
        <div className="Bag">
          <img src={isMenuOpen ? closeBag : bag} alt="Bag Icon" />{" "}
          {/* Change the bag icon dynamically */}
        </div>
      </div>
      <div className="nav-link-bottom">
        <img src={isMenuOpen ? closeNavLink : navlink} alt="Nav link Icon" />{" "}
        {/* Change the nav link icon dynamically */}
      </div>
    </div>
  );
};

export default SideBar;

import React, { useState } from "react";
import "./Navbar.css";
import { Menuitem } from "./Menuitem";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbarItems">
      <a href="/">
        <h1 className="navbar-logo">Trippy</h1>
      </a>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        {/* <i className="fas fa-times"></i> */}
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {Menuitem.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;

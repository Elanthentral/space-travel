import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavData } from "./NavData";
import "./NavBar.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/shared/logo.svg";

function NavBar() {
  const [ActiveNav, setActiveNav] = useState("/");
  const [togglemenu, setTogglemenu] = useState(false);

  const toggleClick = () => {
    setTogglemenu(!togglemenu);
  };
  const activePage = (url) => {
    setActiveNav(window.location.pathname);
  };
  return (
    <header className="flex primary-header">
      <div>
        <img src={logo} className="logo" />
        <button className="mobile-nav-toggle" onClick={toggleClick}>
          <span class="sr-only">Menu</span>
          {togglemenu ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
      <nav className="flex">
        <ul
          className={`flex primary-navigation underline-indicators ${
            togglemenu ? "slide-in" : "slide-out"
          }`}
        >
          {NavData.map((item, i) => (
            <li
              key={i}
              onClick={() => activePage(item.url)}
              className={
                window.location.pathname === item.url ? " active" : " "
              }
            >
              <Link to={item.url}>
                <a className="--ff-sans-cond text-white uppercase letter-spacing-2">
                  <span>{item.navnum}</span>
                  {item.navtitle}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;

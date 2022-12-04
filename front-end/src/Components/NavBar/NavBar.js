import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import { UserContext } from "../../Providers/UserProviders";
import { useContext } from "react";

//CSS Imports
import "./NavBar.css";
import Button from "react-bootstrap/Button";

const NavBar = ({ setModalOpen, applicationUser }) => {
  const user = useContext(UserContext);
  const [click, setClick] = useState(false);

  // methods
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return user ? (
    <DashboardNav applicationUser={applicationUser} />
  ) : (
    <div className="Navbar">
      <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
        <img src="/images/logoGS.png" alt="logo" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            to="/volunteers"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Volunteers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/seniors" className="nav-links" onClick={closeMobileMenu}>
            Seniors
          </Link>
        </li>
        <li className="nav-item" onClick={closeMobileMenu}>
          <button onClick={() => setModalOpen(true)} className="nav-links-mobile" >
            Login
          </button>
        </li>
      </ul>

      <Button  className="batt1" onClick={() => setModalOpen(true)}>
        <i id="avatar" className="fa-solid fa-user"></i>Login
      </Button>
    </div>
  );
};

export default NavBar;

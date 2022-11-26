import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Dropdown from 'react-bootstrap/Dropdown';


//Component Import
import logo from "../images/logoGS.png";

//CSS Import
import "./DashboardNav.css";

const DashboardNav = ({ userAuth }) => {
  const { displayName, photoURL } = userAuth;
  return (
    <div className="Navbar">
      <Navbar>
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <div className = "leftside">
        <img src={photoURL} className="profile-pic" alt={displayName} />
        <Dropdown >
          <Dropdown.Toggle variant="success" id="dropdown">
            {displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-3">Sign-Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <i class="fa-light fa-envelope"></i>
        <i class="fa-light fa-bell"></i> */}
        </div>

      </Navbar>
    </div>
  );
};

export default DashboardNav;

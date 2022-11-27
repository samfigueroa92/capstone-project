import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { signOut } from "../Services/Firebase";
import { UserContext } from "../Providers/UserProviders";
import { useContext } from "react";

//Component Import
import logo from "../images/logoGS.png";

//CSS Import
import "./DashboardNav.css";

const DashboardNav = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { displayName, photoURL } = user;

  return (
      <Navbar className="dash-navbar">
        <Navbar.Brand href="/" className="nav-logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Container className="dashboard-nav">
          <Nav className="me-auto.">
            <img src={photoURL} className="profile-pic" alt={displayName} />
            <Dropdown>
              <Dropdown.Toggle id="dropdown">{displayName}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/user-dashboard")}>Dashboard</Dropdown.Item>
                <Dropdown.Item onClick={signOut}>Sign-Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <i className="fa-regular fa-envelope" id="envelope"></i>
            <i className="fa-regular fa-bell" id="bell"></i>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default DashboardNav;

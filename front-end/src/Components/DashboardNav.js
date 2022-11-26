import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { signOut } from "../Services/Firebase";
import { UserContext } from "../Providers/UserProviders";
import { useContext } from "react";

//Component Import
import logo from "../images/logoGS.png";

//CSS Import
import "./DashboardNav.css";

const DashboardNav = () => {
  const user = useContext(UserContext);

  const { displayName, photoURL } = user;

  return (
    <div className="dash-navbar">
      <Navbar>
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Container className="dashboard-nav">
          <Nav className="me-auto.">
            {/* <div className="leftside"> */}
            <img src={photoURL} className="profile-pic" alt={displayName} />
            <Dropdown>
              <Dropdown.Toggle id="dropdown">{displayName}</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={signOut}>Sign-Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <i className="fa-regular fa-envelope" id="envelope"></i>
            <i className="fa-regular fa-bell" id="bell"></i>
            {/* </div> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default DashboardNav;

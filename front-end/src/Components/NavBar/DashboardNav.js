//Dependencies
import { signOut } from "../../Services/Firebase";
import { UserContext } from "../../Providers/UserProviders";
import { useContext } from "react";

//Bootstrap
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

//CSS Import
import "./DashboardNav.css";

const DashboardNav = ({ applicationUser }) => {
  const user = useContext(UserContext);
  const { displayName, photoURL } = user;

  return (
    <Navbar className="dash-navbar">
      <Navbar.Brand className="nav-logo">
        <img src="/images/logoGS.png" alt="logo" />
      </Navbar.Brand>
      <Container className="dashboard-nav">
        <Nav className="me-auto.">
          <img src={applicationUser.profilephoto ? applicationUser.profilephoto : photoURL} className="profile-pic" alt={displayName} />
          <Dropdown>
            <Dropdown.Toggle id="dropdown">
              {applicationUser.verified ? (
                <i className="fa-solid fa-circle-check"></i>
              ) : null}
              {displayName.split(" ").shift()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
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

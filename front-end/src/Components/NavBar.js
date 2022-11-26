//Component Imports
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DashboardNav from "./DashboardNav";
import { UserContext } from "../Providers/UserProviders";
import { useContext } from "react";

//CSS Imports
import "./NavBar.css";
import logo from "../images/logoGS.png";
import Button from "react-bootstrap/Button";

const NavBar = ({ setModalOpen }) => {
  const user = useContext(UserContext);

  return user ? <DashboardNav /> : (
    <div className="Navbar">
      <Navbar>
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Container className="nav-content">
          <Nav className="me-auto.">
            <Nav.Link href="/volunteers" className="links">
              Volunteers
            </Nav.Link>
            <Nav.Link href="/seniors" className="links">
              Seniors
            </Nav.Link>
          </Nav>
          <Button onClick={() => setModalOpen(true)}>
            <i id="avatar" className="fa-solid fa-user"></i>Login
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

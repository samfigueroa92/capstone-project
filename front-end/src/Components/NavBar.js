//Component Imports
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//CSS Imports
import "./NavBar.css";
import logo from "../images/logoGS.png";
import Button from "react-bootstrap/Button";

const NavBar = ({ setModalOpen }) => {
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Container className="nav-content">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import "./NavBar.css";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logoGS.png"

const NavBar = () => {
  return (
    <div className="Navbar">
      <Navbar>
          <Navbar.Brand href="/" className="logo">
            <img src={logo} alt="logo"/>
            </Navbar.Brand>
            <Container>
          <Nav className="me-auto.">
            <Nav.Link href="/volunteers" className="links">Volunteers</Nav.Link>
            <Nav.Link href="/seniors" className="links">Seniors</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

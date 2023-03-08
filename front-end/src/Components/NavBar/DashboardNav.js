//Dependencies
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "../../Services/Firebase";
import { UserContext } from "../../Providers/UserProviders";
import { useContext, useState } from "react";


//Bootstrap
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

// ICONS 
// import { MdArrowDropDown } from "react-icons/md"

//CSS Import
import "./DashboardNav.css";

const DashboardNav = ({ applicationUser }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { displayName, photoURL } = user;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <Navbar className="dash-navbar">
      <Navbar.Brand className="nav-logo">
        <Link to='/user-dashboard'>
        <img src="/images/logoGS.png" alt="logo" />
        </Link>
      </Navbar.Brand>
      <Container className="dashboard-nav">
        <Nav className="me-auto.">
          {/* <div className="yet" > */}
          <img onClick={handleClick} src={applicationUser.profilephoto ? applicationUser.profilephoto : photoURL} className="profile-pic" alt={displayName} />
          {/* </div> */}
          
          <Dropdown>
            <Dropdown.Toggle id="dropdown">
              {applicationUser.verified ? (
                <i className="fa-solid fa-circle-check"></i>
              ) : null}
              <div className="person-name">
              {displayName.split(" ").shift()}
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>

            
               <Dropdown.Item onClick={()=>{navigate('/user/settings')}}>
                Settings <i className="fa-sharp fa-solid fa-gear"></i>
                </Dropdown.Item>
          
              <Dropdown.Item onClick={signOut}>Sign-Out </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
      {/* <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            to="/user-dashboard"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            User-Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/accepted-requests"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Accepted Request
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/browse-requests"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Browse Request
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/achievements"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Achievements
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/reviews"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Reviews
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/settings"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Settings
          </Link>
        </li>  */}
        {/* <button className="nav-item">
          <Link
            to="/reviews"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            SignOUt
          </Link>
        </button> */}
         {/* </ul> */}
    </Navbar>
  );
};

export default DashboardNav;

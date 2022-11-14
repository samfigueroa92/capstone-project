import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/volunteers" >Volunteers</Link>
            <Link to="/seniors">Seniors</Link>
        </div>
    );
};

export default NavBar;
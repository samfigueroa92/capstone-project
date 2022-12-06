import React, {useEffect} from "react";
import { Link } from "react-router-dom";

// Css
import "./Achievements.css";

// Components
// import SidebarNav from "../Dashboard/SidebarNav.js";
import SvgIcon from "./SvgIcon";

const Achievements = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="achieve" style={{ paddingTop: "110px" }}>
      <SvgIcon />
      <p>GoldenSolutions Achievements</p>
      <p> Coming Soon!</p>
      <Link className="navigate" to="/user-dashboard">
        BACK
      </Link>
    </div>
  );
};

export default Achievements;

import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import SidebarNav from "./SidebarNav";

// Css
import "./Achievements.css";

// Components
// import SidebarNav from "../Dashboard/SidebarNav.js";
import SvgIcon from "../ComingSoon/SvgIcon";

const Achievements = ({setDate, applicationUser, setRequestSearch, requestSearch }) => {

  return (
    <div className='user-dashboard'>
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} applicationUser={applicationUser}  setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch} style ={{width: '60px'}}/>
      </div>
    <div className="achieve" style={{ paddingTop: "110px" }}>
      <SvgIcon />
      <p>GoldenSolutions Achievements</p>
      <p> Coming Soon!</p>
      {/* <Link className="navigate" to="/user-dashboard">
        BACK
      </Link> */}
    </div>
    </div>
  );
};

export default Achievements;

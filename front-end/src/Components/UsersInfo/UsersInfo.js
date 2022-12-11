import React from "react";
import { Link } from "react-router-dom";

// Css
import "./UsersInfo.css";

// Components


const UsersInfo = ({}) => {
 
  return (
    <div className="userInfo">
      <p></p>
      <Link className="navigate" to="/user-dashboard">
        BACK
      </Link>
    </div>
  );
};

export default UsersInfo;

import React from "react";
import { Link } from "react-router-dom";

// Css
import "./UsersInfo.css";

// Components


const UsersInfo = ({applicationUser}) => {
  console.log(applicationUser.firstname);
 
  return (
    <div className="userInfo">
      <p>return ({  applicationUser.firstname})</p>
      <Link className="navigate" to="/user-dashboard">
        BACK
      </Link>
    </div>
  );
};

export default UsersInfo;

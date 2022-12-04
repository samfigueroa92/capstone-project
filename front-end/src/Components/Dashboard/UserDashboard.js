//Component Imports
import SidebarNav from "./SidebarNav";
import MyRequests from "./MyRequests";
import OpenRequests from "./OpenRequests";
import MyFavorites from "./MyFavorites";
import {useEffect} from "react";
import axios from "axios";

//CSS Imports
import "./UserDashboard.css";

// Function to query the database with the users uid, and return their posted / assigned requests

const UserDashboard = ({date, setDate, applicationUser, requests, setRequests, stringCurrentDate, users}) => {
    const API = process.env.REACT_APP_BACKEND_API_KEY;
    useEffect(() => {
        axios
          .get(`${API}/requests`)
          .then((res) => setRequests(res.data))
          .catch((err) => console.error(err));
      }, []);

    return (
        <div className='user-dashboard'>
            <div className="sidebar-nav">
            <SidebarNav setDate = {setDate} applicationUser={applicationUser}/>
            </div>
            <div className="requests">
            <div>
                <MyRequests date={date} requests={requests} applicationUser={applicationUser} stringCurrentDate={stringCurrentDate}/>
            </div>
            <div>
               {applicationUser.user_type === "Volunteer" ? <OpenRequests date={date} requests={requests} stringCurrentDate = {stringCurrentDate}/> :
               <MyFavorites users={users}/>
               }
            </div>
            </div>
        </div>
    );
};

export default UserDashboard;
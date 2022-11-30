import axios from "axios";
import { useState, useEffect } from "react";

//Component Imports
import SidebarNav from "./SidebarNav";
import MyRequests from "./MyRequests";
import OpenRequests from "./OpenRequests";

//CSS Imports
import "./UserDashboard.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

// Function to query the database with the users uid, and return their posted / assigned requests


const UserDashboard = ({date, setDate, currentUser}) => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get(`${API}/requests`)
        .then(res => setRequests(res.data))
        .catch(err => console.error(err))
    }, []);

    return (
        <div className='user-dashboard'>
            <div className="sidebar-nav">
            <SidebarNav setDate = {setDate}/>
            </div>
            <div className="requests">
            <div>
                <MyRequests date = {date} requests={requests} currentUser={currentUser}/>
            </div>
            <div>
                <OpenRequests date = {date} requests={requests}/>
            </div>
            </div>
        </div>
    );
};

export default UserDashboard;
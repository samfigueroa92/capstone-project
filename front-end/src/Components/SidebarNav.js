import React, {useState} from "react";
import { Link } from "react-router-dom";

//Component Import
import Calender from "./Calendar"

//CSS Import
import "./SidebarNav.css"

const SidebarNav = () => {
    const [volunteer, setVolunteer] = useState(true)

    const handleAcceptedRequest = () =>{
        console.log('hello')
    }

    const handleOpenRequest = () => {
        console.log('Bye')
    }
    const handlePersonalAchievement = () => {
        console.log('Bonjour')
    }

    const handleSettings = () =>{
        console.log('Au Revoir')
    }

    return (
        <div className='SideBar'>
            {volunteer ? 
            <div className = 'text'>
        <Link to='/user-dashboard'>
            <p className="header" onClick>Volunteer Dashboard</p>
            <div className="under-click"></div>
        </Link>
        <Link>
            <p onClick ={handleAcceptedRequest}>Accepted Requests</p>
            <div className="under-click"></div>
        </Link>
        <Link>
            <p onClick ={handleOpenRequest}>Open Requests</p>
            <div className="under-click"></div>
        </Link>
        <Link>
            <p onClick ={handlePersonalAchievement}>Achievements</p>
            <div className="under-click"></div>
        </Link>
        <Link>
            <p onClick ={handleSettings}>Settings</p>
            <div className="under-click"></div>
        </Link>
            </div>:
            <>
            <p>Senior Dashboard</p>
            <p>My Requests</p>
            <p>Volunteers</p>
            <p>Submit A Request</p>
            <p>Settings</p>
            </>}
            <Calender/>
        </div>
    );
};

export default SidebarNav;
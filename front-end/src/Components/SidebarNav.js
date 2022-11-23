import React, {useState} from "react";

//Component Import
import Calender from "./Calendar"

//CSS Import
import "./SidebarNav.css"

const SidebarNav = () => {
    const [volunteer, setVolunteer] = useState(true)

    const handleAcceptedRequest = () =>{

    }

    const handleOpenRequest = () => {

    }
    const handlePersonalAchievement = () => {

    }

    const handleSettings = () =>{

    }

    return (
        <div className='SideBar'>
            {volunteer ? 
            <>
            <p className="header">Volunteer Dashboard</p>
            <div className="under-click"></div>
            <p onClick ={handleAcceptedRequest}>Accepted Requests</p>
            <div className="under-click"></div>
            <p onClick ={handleOpenRequest}>Open Requests</p>
            <div className="under-click"></div>
            <p onClick ={handlePersonalAchievement}>Achievements</p>
            <div className="under-click"></div>
            <p onClick ={handleSettings}>Settings</p>
            <div className="under-click"></div>
            </>:
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
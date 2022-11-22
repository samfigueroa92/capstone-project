import Calender from "./Calendar"
import React, {useState} from "react";
const SidebarNav = () => {
    const [volunteer, setVolunteer] = useState(true)
    return (
        <div className='SideBar'>
            {volunteer ? 
            <>
            <p>Volunteer Dashboard</p>
            <p>Accepted Requests</p>
            <p>Open Requests</p>
            <p>Achievements</p>
            <p>Settings</p>
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
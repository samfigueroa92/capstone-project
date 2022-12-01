//Component Imports
import SidebarNav from "./SidebarNav";
import MyRequests from "./MyRequests";
import OpenRequests from "./OpenRequests";

//CSS Imports
import "./UserDashboard.css";

// Function to query the database with the users uid, and return their posted / assigned requests

const UserDashboard = ({date, setDate, applicationUser, requests}) => {

    return (
        <div className='user-dashboard'>
            <div className="sidebar-nav">
            <SidebarNav setDate = {setDate}/>
            </div>
            <div className="requests">
            <div>
                <MyRequests date={date} requests={requests} applicationUser={applicationUser}/>
            </div>
            <div>
                <OpenRequests date={date} requests={requests}/>
            </div>
            </div>
        </div>
    );
};

export default UserDashboard;
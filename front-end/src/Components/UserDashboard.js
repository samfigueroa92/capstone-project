

//Component Imports
import SidebarNav from "./SidebarNav";

//CSS Imports
import "./UserDashboard.css"
const UserDashboard = () => {
    return (
        <div className="user-dashboard">
            <SidebarNav/>
            <div className = 'main-dashboard'></div>
        </div>
    );
};

export default UserDashboard;
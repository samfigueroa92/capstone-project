

//Component Imports
import SidebarNav from "./SidebarNav";

//CSS Imports
import './VolunteerDashboard.css'

const VolunteerDashboard = () => {
    return (
        <div className='volunteer-dashboard'>
            <SidebarNav/>
            <div className = 'main-dashboard'></div>
        </div>
    );
};

export default VolunteerDashboard;
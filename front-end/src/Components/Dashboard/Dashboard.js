//DEPENDENCIES
import { useState } from "react";

//COMPONENTS
import SidebarNav from "./SideBar/SidebarNav";
import DashboardFilter from "./DashboardFilter";

//CSS
import "./Dashboard.css";

const Dashboard = ({applicationUser, dashboardFilter, setDashboardFilter, setLocation, location, setIteration, iteration}) => {
    const [date, setDate] = useState(new Date());
    const [requestSearch, setRequestSearch] = useState("");
  
    return (
      <div className="dashboard">
        <SidebarNav
          setDate={setDate}
          date={date}
          applicationUser={applicationUser}
          requestSearch={requestSearch}
          setRequestSearch={setRequestSearch}
          setDashboardFilter={setDashboardFilter}
          dashboardFilter = {dashboardFilter}
        />
        <DashboardFilter 
        applicationUser={applicationUser}
        date={date}
        requestSearch = {requestSearch}
        setRequestSearch={setRequestSearch}
        dashboardFilter={dashboardFilter}
        setDashboardFilter ={setDashboardFilter}
        setLocation={setLocation}
        location={location}
        setIteration={setIteration}
        iteration={iteration}
        />
      </div>
    );
  };

export default Dashboard;

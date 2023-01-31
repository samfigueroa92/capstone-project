// Components
import SvgIcon from "../ComingSoon/SvgIcon";
import SidebarNav from "./SidebarNav";

// CSS
import "./Achievements.css";

const Achievements = ({setDate, applicationUser}) => {
  
  return (
    <div className='user-dashboard'>
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} applicationUser={applicationUser} style ={{width: '60px'}}/>
      </div>
    <div className="achieve" style={{ paddingTop: "110px" }}>
      <SvgIcon />
      <p>GoldenSolutions Achievements</p>
      <p> Coming Soon!</p>
    </div>
    </div>
  );
};

export default Achievements;

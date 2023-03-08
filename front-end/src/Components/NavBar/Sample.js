// import React, {useState} from 'react';
// import { Link } from "react-router-dom";

// import Dropdown from "./Dropdown";

// const Sample = () => {

//     const [click, setClick] = useState(false);

//     const [dropdown, setDropdown] = useState(false);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const handleDrop = () => {
//         if (window.innerWidth < 960) {
//           setDropdown(false);
//         } else {
//           setDropdown(true);
//         }
//       };
    
//       const handleDrops = () => {
//         if (window.innerWidth < 960) {
//           setDropdown(false);
//         } else {
//           setDropdown(false);
//         }
//       };
//   return (
//     <>
//         <Navbar className="dash-navbar">
//         <nav>
//         <Link to='/user-dashboard'>
//         <img src="/images/logoGS.png" alt="logo" />
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//         <img src={applicationUser.profilephoto ? applicationUser.profilephoto : photoURL} className="profile-pic" alt={displayName} />        
//         </div>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//         <li className="nav-item">
//           <Link
//             to="/user-dashboard"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             User-Dashboard
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/accepted-requests"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             Accepted Request
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/browse-requests"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             Browse Request
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/achievements"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             Achievements
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/reviews"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             Reviews
//           </Link>
//         </li>
//         <li className="nav-item" onMouseEnter={handleDrop} onMouseLeave={handleDrops}>
//           <Link
//             to="/settings"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             Settings
//           </Link>
//         </li>
//         <button className="nav-item" onMouseEnter={handleDrop} onMouseLeave={handleDrops}>
//           <Link
//             to="/reviews"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             SignOUt
//           </Link>
//         </button>
//         </ul>
//         {applicationUser.verified ? (
//                 <i className="fa-solid fa-circle-check"></i>
//               ) : null}
//               <div className="person-name">
//               {displayName.split(" ").shift()}
//               </div>
//         </nav>
//         </Navbar>
//     </>
//   )
// }

// export default Sample
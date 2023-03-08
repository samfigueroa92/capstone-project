// import React, {useState} from 'react';
// import { DropdownData } from './DropdownData';
// import { Link } from "react-router-dom";
// import "./DashboardNav.css"

// const Dropdown = () => {
//     const [click, setClick] = useState(false);
//     const handleClick = setClick(!click)
//   return (
//     <>
//     <ul onClick={handleClick} className={click ? "clicked" : "menu"}>
//     {DropdownData.map((data, index) => {
//             return (
//                 <li key={index}>
//                     <Link className={data.className} to={data.path} onClick={() => setClick(false)}>{data.title}</Link>
//                 </li>
//             )
//         })}
//     </ul>
//     </>
//   )
// }

// export default Dropdown;
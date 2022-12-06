import { useContext } from "react";
import { UserContext } from "../Providers/UserProviders";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Unprotected = ({ children, applicationUser, setApplicationUser }) => {
  const user = useContext(UserContext);
  const API = process.env.REACT_APP_BACKEND_API_KEY;

//   if (user) {
//     if (applicationUser.uuid !== user.uid) {
//       console.log(
//         "WARNING : applicationUser does not appear to be set. Retreiving information"
//       );
//       axios.get(`${API}/users/${user.uid}`).then((res) => {
//         console.log(res.data.payload);
//         if (res.data.payload.uuid) {
//           setApplicationUser(res.data.payload);
//           console.log(applicationUser);
//         }
//       });
//     }
//     return <Navigate to="/user-dashboard" />;
//   }

  return children;
};

export default Unprotected;

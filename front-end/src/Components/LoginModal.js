import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProviders";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, deleteUser } from "../Services/Firebase";
import axios from "axios";
import { useState } from "react";

//CSS Imports
import "./LoginModal.css";
import Button from "react-bootstrap/esm/Button";

const API = process.env.REACT_APP_BACKEND_API_KEY;

const LoginModal = ({ modalOpen, setModalOpen, setApplicationUser }) => {
  const user = useContext(UserContext);
  //const navigate = useNavigate();
  // const [loggedInUser, setLoggedInUser] = useState();

   const userCheck = async (user) => {
    axios.get(`${API}/users/${user.uid}`).then((res) => {
  //     if (res.data.name === "QueryResultError") {
  //       //alert("No user has been found. Join us today!");
  //       navigate("/sign-up");
  //     } else {
  //       setLoggedInUser(res.data);
  //     }
  if (res.data.payload.uuid) {
    setApplicationUser(res.data.payload)
  }
     });
  };
  // console.log(loggedInUser);

  useEffect(() => {
    if (user) {
       userCheck(user);
      setModalOpen(false);
      // navigate("/user-dashboard");
    }
  }, [user]);
  // console.log(user);

  //stopPropagation prevents the "login-modal" onClick event to happen

  return modalOpen ? (
    <div className="login-modal" onClick={() => setModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="avatar-container">
          <div className="login-avatar">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
        <div className="close">
          <div className="x-mark" onClick={() => setModalOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="signin-buttons">
          <h3>Login</h3>
          <Button onClick={signInWithGoogle}>Sign in With Google</Button>
          <p>Not a user? Sign up here.</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoginModal;

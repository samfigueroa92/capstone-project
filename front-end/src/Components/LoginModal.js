import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProviders";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signOut } from "../Services/Firebase";

//CSS Imports
import "./LoginModal.css";
import Button from "react-bootstrap/esm/Button";

const LoginModal = ({ modalOpen, setModalOpen, setUserAuth }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setUserAuth(user)
      navigate("/");
    }
  }, [user, navigate]);
  console.log(user)

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
          <Button onClick={signOut}> Sign out</Button>
          <p>Not a user? Sign up here.</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoginModal;

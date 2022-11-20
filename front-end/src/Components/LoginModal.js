import "./LoginModal.css";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProviders";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signOut } from "../Services/Firebase";
import Button from "react-bootstrap/esm/Button";

const LoginModal = ({ modalOpen, setModalOpen }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("loggedInPage");
    }
  }, [user, navigate]);

  //   return(
  //       <div>
  //     <section>
  //       <div>
  //         <button onClick={signInWithGoogle}>Sign in With google</button>
  //         <button onClick={signOut}> sign out</button>
  //     </div>
  //     </section>
  //   </div>
  //   )

//   stopPropagation prevents the "login-modal" onClick event to happen

  return modalOpen ? (
    <div className="login-modal" onClick={() => setModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <div className="x-mark" onClick={() => setModalOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="signin-buttons">
        <Button onClick={signInWithGoogle}>Sign in With Google</Button>
        <Button onClick={signOut}> Sign out</Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoginModal;

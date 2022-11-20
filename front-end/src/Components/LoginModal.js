import "./LoginModal.css"
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Providers/UserProviders';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signOut } from '../Services/Firebase';

const LoginModal = () => {

    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('loggedInPage');
        }
    },[user,navigate]);
    
    // return(
    //     <div>
    //   <section>
    //     <div>
    //       <button onClick={signInWithGoogle}>Sign in With google</button>
    //       <button onClick={signOut}> sign out</button>
    //   </div>
    //   </section>

    // </div>

    


    return (
        <div className="login-modal">

        </div>
    );
};

export default LoginModal;
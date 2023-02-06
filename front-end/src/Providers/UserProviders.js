//Dependencies
import { useEffect, useState, createContext } from "react";
import { auth } from "../Services/Firebase";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null); 


  useEffect(() => {
    //dont proceed until firebase does its thang....
    auth.onAuthStateChanged((user) => {
     
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

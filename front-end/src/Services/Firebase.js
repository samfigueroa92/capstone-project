
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider , signInWithPopup, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBYclzV7ojPwBUfzCWVAZZjpNioglYZpNc",
  authDomain: "goldensolution-5327b.firebaseapp.com",
  projectId: "goldensolution-5327b",
  storageBucket: "goldensolution-5327b.appspot.com",
  messagingSenderId: "1085334323375",
  appId: "1:1085334323375:web:888f92775716009c14145a",
  measurementId: "G-0MF7L0HSV1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
    try{
        signInWithPopup(auth, googleProvider).then((res)=>{
            const user = res.user;
        })
    }
    catch(error){
        console.error(error)
    }
}
export const signOut = async()=>{
    try{
        await auth.signOut();
        alert('GoodBye')
    }catch(error){
        console.error(error)
    }
}
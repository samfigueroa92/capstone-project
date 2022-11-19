import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase.analytics';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

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
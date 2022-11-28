import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  getAdditionalUserInfo,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};

export const signInWithGoogle = () => {
  try {
    signInWithPopup(auth, googleProvider).then((res) => {
      const user = res.user;
      console.log(user);
    });
  } catch (err) {
    console.log(err);
  }
};

//new func for sign up
//sign up will have signin with popup

export const signUpWithGoogle = async () => {
  try {
    signInWithPopup(auth, googleProvider).then((res) => {
      const user = res.user;
      console.log(user);
    });
  } catch (error) {
    console.log(error);
  }
};

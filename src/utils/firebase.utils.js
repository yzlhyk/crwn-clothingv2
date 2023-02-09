// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUxq9foHlcilAbYjoBNya3mecKDLdPPws",
  authDomain: "crwn-db-5c247.firebaseapp.com",
  projectId: "crwn-db-5c247",
  storageBucket: "crwn-db-5c247.appspot.com",
  messagingSenderId: "729911020614",
  appId: "1:729911020614:web:bae5b023ebe6fe7de70e47",
  measurementId: "G-PLVK7GFRYT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
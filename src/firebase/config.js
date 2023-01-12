// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVNFD6aXRWQLbMemYhVFgZjBtJPgUp8ZY",
    authDomain: "new-journal-18431.firebaseapp.com",
    projectId: "new-journal-18431",
    storageBucket: "new-journal-18431.appspot.com",
    messagingSenderId: "860830889164",
    appId: "1:860830889164:web:3056a469603cd2232a3e69"
  };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

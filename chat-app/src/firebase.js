// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfmOAqWBZk2OC_Yo5lOF-44N03wYpV0Co",
    authDomain: "react-chat-94098.firebaseapp.com",
    projectId: "react-chat-94098",
    storageBucket: "react-chat-94098.appspot.com",
    messagingSenderId: "496362065014",
    appId: "1:496362065014:web:a79e152c0e05a62441a357",
    measurementId: "G-F79MM6MVGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
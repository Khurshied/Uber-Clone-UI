// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{GoogleAuthProvider, getAuth}  from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdyPFxZFoPjpYdwzrPM095HUE8sRGa_ho",
  authDomain: "uber-ui-clone.firebaseapp.com",
  projectId: "uber-ui-clone",
  storageBucket: "uber-ui-clone.appspot.com",
  messagingSenderId: "905585895473",
  appId: "1:905585895473:web:d0910c2a3ee6ab9edb8d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
 const auth = new getAuth();

 export {app, provider, auth}
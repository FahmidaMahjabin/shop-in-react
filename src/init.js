// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2eMo9Dvp8vngskTQw0QGL-YW-7uvB210",
  authDomain: "shop-in-58b95.firebaseapp.com",
  projectId: "shop-in-58b95",
  storageBucket: "shop-in-58b95.appspot.com",
  messagingSenderId: "2614447011",
  appId: "1:2614447011:web:f8857ac6fb6988438da816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
console.log("auth:", auth)
export default auth;
// do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkmsUEvMd1ovUuNI1WO409kxF_7mWunMk",
  authDomain: "simple-firebase-bd2ae.firebaseapp.com",
  projectId: "simple-firebase-bd2ae",
  storageBucket: "simple-firebase-bd2ae.firebasestorage.app",
  messagingSenderId: "765836061454",
  appId: "1:765836061454:web:8f5446dc9d444f0870455f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
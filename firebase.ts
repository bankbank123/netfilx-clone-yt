// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAPZPwFOtaIYIhAcc9yikjbDCJpE9FidY",
  authDomain: "netflix-clone-yt-c93f8.firebaseapp.com",
  projectId: "netflix-clone-yt-c93f8",
  storageBucket: "netflix-clone-yt-c93f8.appspot.com",
  messagingSenderId: "947750675938",
  appId: "1:947750675938:web:9584fbab08fe830e5045bb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }



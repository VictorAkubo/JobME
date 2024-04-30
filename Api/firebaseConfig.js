// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-UKXTS-YadYEYTzq7sdSAZDjl1VoX_lo",
  authDomain: "jobme-c03b7.firebaseapp.com",
  projectId: "jobme-c03b7",
  storageBucket: "jobme-c03b7.appspot.com",
  messagingSenderId: "345757865959",
  appId: "1:345757865959:web:fffda2eb811c70fe6a4f42",
  measurementId: "G-YJ1SD7FBWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}

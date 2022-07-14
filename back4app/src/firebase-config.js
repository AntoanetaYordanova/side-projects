import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey : process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "fir-1ca73",
    storageBucket: "fir-1ca73.appspot.com",
    messagingSenderId: "765438309198",
    appId: "1:765438309198:web:e85b9491dffcc05075241f",
    measurementId: "G-M0E1ZEH68Z"
  }

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

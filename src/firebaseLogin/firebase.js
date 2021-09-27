import { initializeApp } from "firebase/app";
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
    projectId:process.env.REACT_APP_PROEJCT_ID ,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId:process.env.REACT_APP_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

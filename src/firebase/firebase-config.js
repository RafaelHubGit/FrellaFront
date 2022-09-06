import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDhq051vDk4zKit7ey7rjCTyfVoiZhB93w",
    authDomain: "frella-f9f08.firebaseapp.com",
    projectId: "frella-f9f08",
    storageBucket: "frella-f9f08.appspot.com",
    messagingSenderId: "537923415028",
    appId: "1:537923415028:web:b9f6bd0f4bf033549167a1",
    measurementId: "G-72M9QEW0PC"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    // googleAuthProvider,
    app
}

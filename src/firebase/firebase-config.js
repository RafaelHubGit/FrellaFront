import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDhq051vDk4zKit7ey7rjCTyfVoiZhB93w",
    authDomain: "frella-f9f08.firebaseapp.com",
    projectId: "frella-f9f08",
    storageBucket: "frella-f9f08.appspot.com",
    messagingSenderId: "537923415028",
    appId: "1:537923415028:web:bb1dbad57cba7e609167a1",
    measurementId: "G-YD5NJXZQ19"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    // googleAuthProvider,
    app
}

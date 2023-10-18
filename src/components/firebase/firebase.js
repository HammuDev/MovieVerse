import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCF_6Dvv8ptTWn-XRYPIhMdePJ2fR_Avrc",
  authDomain: "movieverse-9b06d.firebaseapp.com",
  projectId: "movieverse-9b06d",
  storageBucket: "movieverse-9b06d.appspot.com",
  messagingSenderId: "859365586375",
  appId: "1:859365586375:web:dfc9b90be765a24d1bd5e2"
};


const app = initializeApp(firebaseConfig);
// db means database we import from firebase 
export const db = getFirestore(app);
//here is movies is a collection that we create in fire base
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");



export default app;
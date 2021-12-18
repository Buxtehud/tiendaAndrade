// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Pmpcv3qDNFkxaEdcWXuZLlaZ6wXkdYE",
  authDomain: "basedatoscoder.firebaseapp.com",
  projectId: "basedatoscoder",
  storageBucket: "basedatoscoder.appspot.com",
  messagingSenderId: "167745854091",
  appId: "1:167745854091:web:1ccb197ab8457e6212528e",
  measurementId: "G-4NQR5H78KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
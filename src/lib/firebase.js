import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGg4wOTn6aVowE6hbt7KJ7bFI5Kr0gcl8",
  authDomain: "instagram-clone-2c872.firebaseapp.com",
  projectId: "instagram-clone-2c872",
  storageBucket: "instagram-clone-2c872.appspot.com",
  messagingSenderId: "290473674705",
  appId: "1:290473674705:web:aef23bd20ea6fd388302f0",
  measurementId: "G-701E23GRQP",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);

export { firebase, auth, db };

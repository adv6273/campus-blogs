// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCW_lL5bpXEickNp1PD1Nyq3-BW6LZQcZ0",
//   authDomain: "react-blogs-app.firebaseapp.com",
//   projectId: "react-blogs-app",
//   storageBucket: "react-blogs-app.appspot.com",
//   messagingSenderId: "520626893881",
//   appId: "1:520626893881:web:5432b7c30440ec4a0749e8"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db, storage };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
import {getFirestore}from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAeNOwAVVhUdF1RZRJa1XNEa8H6HQMy3S8",
  authDomain: "react-blogs-app-b2eb4.firebaseapp.com",
  projectId: "react-blogs-app-b2eb4",
  storageBucket: "react-blogs-app-b2eb4.appspot.com",
  messagingSenderId: "134924867724",
  appId: "1:134924867724:web:39b0a24398446177fb43a9",
  measurementId: "G-010JMTNEE6"
};

  const app = initializeApp(firebaseConfig);
  export const db= getFirestore(app);
  export const auth=getAuth(app);
  // export const provider=new GoogleAuthProvider();
  export const storage = getStorage(app);
  
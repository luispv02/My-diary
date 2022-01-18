
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUpYf9THVDy5tdqUj1evBpm0fWopAV8xI",
  authDomain: "my-diary-c0772.firebaseapp.com",
  projectId: "my-diary-c0772",
  storageBucket: "my-diary-c0772.appspot.com",
  messagingSenderId: "588568671305",
  appId: "1:588568671305:web:2efd0625075cc2167f7b98"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();











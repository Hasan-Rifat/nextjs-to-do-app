// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGDRQg5VO9K7hV6TSHW9xjLckCRaERlb4",
  authDomain: "nextjs-todo-app-c7289.firebaseapp.com",
  projectId: "nextjs-todo-app-c7289",
  storageBucket: "nextjs-todo-app-c7289.appspot.com",
  messagingSenderId: "691008151022",
  appId: "1:691008151022:web:4c12fa4504ef79872b42ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

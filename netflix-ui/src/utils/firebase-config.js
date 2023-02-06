import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDWOxiXf0F_LMIhMKJHisVniE0A0Vuna9c",
  authDomain: "react-netflix-clone-10d6e.firebaseapp.com",
  projectId: "react-netflix-clone-10d6e",
  storageBucket: "react-netflix-clone-10d6e.appspot.com",
  messagingSenderId: "686745080131",
  appId: "1:686745080131:web:ee24cae78a1bc916089ff6",
  measurementId: "G-3GMQSEJDKS"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
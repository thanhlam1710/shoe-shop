import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAsfxsGqoYefyYFx8_WeNHBpg3s34CnoLo",
  authDomain: "login-bfb7c.firebaseapp.com",
  projectId: "login-bfb7c",
  storageBucket: "login-bfb7c.appspot.com",
  messagingSenderId: "133001447703",
  appId: "1:133001447703:web:ae83393d7abaad15f14f52"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
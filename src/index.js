import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA01KJwe06lLyny8dn05YGHIxBqNxVdGlg",
  authDomain: "cart-10518.firebaseapp.com",
  projectId: "cart-10518",
  storageBucket: "cart-10518.appspot.com",
  messagingSenderId: "880527326448",
  appId: "1:880527326448:web:30bfd437b64223a7a3d635",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

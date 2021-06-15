import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase"

firebase.initializeApp({
  apiKey: "AIzaSyBRuEpqv6EivzXZ0eibQoZRRAHfMs8Rscc",
  authDomain: "blank-316513.firebaseapp.com",
  projectId: "blank-316513",
  storageBucket: "blank-316513.appspot.com",
  messagingSenderId: "178097405476",
  appId: "1:178097405476:web:1136730c067f38ae4ae2b1"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

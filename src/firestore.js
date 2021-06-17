import firebase from "firebase/app"
import "firebase/firestore"


firebase.initializeApp({
  apiKey: "AIzaSyBRuEpqv6EivzXZ0eibQoZRRAHfMs8Rscc",
  authDomain: "blank-316513.firebaseapp.com",
  projectId: "blank-316513",
  storageBucket: "blank-316513.appspot.com",
  messagingSenderId: "178097405476",
  appId: "1:178097405476:web:1136730c067f38ae4ae2b1"
})
export const db = firebase.firestore()
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
const db = firebase.firestore()

export const postData = (data)=>{
  return db.collection("data").doc().set({
   timestamp: Date.now(),
   ...data
 }, {merge:true})
}
export const stopFirestore = ()=>{
 db.waitForPendingWrites()
 .finally(()=>{
   db.terminate()
   db.clearPersistence()
 })
}
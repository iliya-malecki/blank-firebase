import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import {db, firestore} from './firestore.js'

const userData = {
    whatever: "lalala",
    something_else: "d"
}
const postData = (data)=>{
   return db.collection("data").doc().set({
    timestamp: firestore.FieldValue.serverTimestamp(),
    ...data
  }, {merge:true})
}
const stopFirestore = ()=>{
  db.waitForPendingWrites()
  .finally(()=>{
    db.terminate()
    db.clearPersistence()
  })
}
function App() {
  //userData.newfield = "wow it works";
  useEffect(()=>{
    postData(userData)
    stopFirestore()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

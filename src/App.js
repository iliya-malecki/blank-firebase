import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import {db, firestore} from './firestore.js'

const userData = {
    whatever: "lalala",
    something_else: "d"
}
const postData = ()=>{
  db.collection("data").add({
    timestamp: firestore.FieldValue.serverTimestamp(),
    ...userData
  })
  
}
function App() {
  //userData.newfield = "wow it works";
  useEffect(()=>{
    postData()
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

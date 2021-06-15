import logo from './logo.svg';
import './App.css';
import firebase from "firebase"
import {useEffect} from "react"
function App() {
  const db = firebase.firestore()
  useEffect(()=>{
    db.collection("data").doc("whaaaat").update({
      whatever: "lalala",
      something_elstte2: "d"
    })
  },[db])
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

import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Countries from "./Countries";

function App() {
  return (
    <>
      <header className="header">
        <h3>Where in the world?</h3>
        <div className="mode">
          <FontAwesomeIcon icon={faMoon} style={{color: 'white'}} />
          <button>Dark Mode</button>
        </div>
      </header>
      <div className="App">
        <Countries/>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMoon } from "@fortawesome/free-solid-svg-icons";

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
        <div className="search">
          <div className="search-input">
            <p><FontAwesomeIcon icon={faSearch} /></p>
            <input type="search" placeholder="Search for a country..." />
          </div>
          <select className="region-select">
            <option value="">Filter by Regions</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;

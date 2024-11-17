import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Countries from "./Countries";
import Country from "./Country";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null); // State to store selected country

  const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const goToPreviousStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <>
      <header className="header">
        <h3>Where in the world?</h3>
        <div className="mode">
          <FontAwesomeIcon icon={faMoon} style={{ color: "white" }} />
          <button>Dark Mode</button>
        </div>
      </header>
      <div className="App">
        {currentStep === 1 && (
          <Countries
            goToNextStep={goToNextStep}
            setSelectedCountry={setSelectedCountry} // Pass the setSelectedCountry function
          />
        )}
        {currentStep === 2 && (
          <Country
            goToPreviousStep={goToPreviousStep}
            selectedCountry={selectedCountry} // Pass the selected country to Country component
          />
        )}
      </div>
    </>
  );
}

export default App;

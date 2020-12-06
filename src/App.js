import { createContext, useState } from 'react';
import './App.css';
import LeftContainer from './Components/LeftContainer/LeftContainer';
import RightContainer from './Components/RightContainer/RightContainer';

export const InfoContext = createContext();
export const CaseTypeContext = createContext();

function App() {

  const [allCountryInfo, setAllCountryInfo] = useState([]);
  const [caseType, setCaseType] = useState("cases");

  return (
    <InfoContext.Provider value={[allCountryInfo, setAllCountryInfo]}>
      <div className="app">
        <div className="left-div">
          <CaseTypeContext.Provider value={[caseType, setCaseType]}>
            <LeftContainer></LeftContainer>
          </CaseTypeContext.Provider>
        </div>
        <div className="right-div">
          <CaseTypeContext.Provider value={[caseType, setCaseType]}>
            <RightContainer></RightContainer>
          </CaseTypeContext.Provider>
        </div>
      </div>
    </InfoContext.Provider>
  );
}

export default App;

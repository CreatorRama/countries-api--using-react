
import Header from "./components/header";
import './app.css';
import { Outlet, json } from 'react-router-dom';
import whitemoon1 from '/assets/moon-outline.svg';
import { useState } from "react";
import { ModeContext } from './components/modecontext';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  return (
    <ModeContext.Provider value={{ mode: isDarkMode, toggleMode: () => setIsDarkMode(prevMode => !prevMode) }}>
      <Header mode={isDarkMode} changemode={setIsDarkMode} image={whitemoon1} />
      <Outlet />
    </ModeContext.Provider>
  );
};

export default App;

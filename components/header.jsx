import { useState } from "react";
import { Link } from "react-router-dom";
import sun from '../assets/sunny.png'; // Assuming this is the dark mode icon

export default function Header({ image,mode,changemode }) {
  // Track if dark mode is enabled

  const toggleMode = () => {
   changemode(!mode)
   localStorage.setItem('isDarkMode',!mode)
  };

  return (
    <header >
      <div className="head"  style={{ backgroundColor: mode ? "rgb(25,39,52)" : "white" }}>
        <Link to={'/'}>
          <p>Where in the World?</p>
        </Link>
        <div className="moon">
          <div className="moon-image">
          <img onClick={toggleMode} className="white" src={mode ?sun:image} alt="moon" />
          <p> <h3>{mode ? "Light Mode" : "Dark Mode"}</h3></p>
          </div>
        </div>
      </div>
    </header>
  );
}

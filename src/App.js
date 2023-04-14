import React, { useState } from 'react';
import './App.css';
import Dark from './compasants/Dark';
import Navbare from './compasants/Navbar';
import Amar from './compasants/amar';
import './compasants/Darks.css';
import FilmCard from './compasants/FilmCard';
import Footer from './compasants/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <div className={darkMode ? "app-container dark-mode" : "app-container"}>
      <Navbare />
      <Dark handleClick={handleClick} darkMode={darkMode} />
      <Amar />
      <FilmCard />
      <Footer darkMode={darkMode} />


    </div>
  );
}

export default App;



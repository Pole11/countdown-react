import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';

const DarkModeContext = React.createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export function ToggleDarkMode({ children }) {
  let [darkModeOn, setDarkModeOn] = useState(true)

  function darkMode() {
    const darkModeElement = document.getElementById('darkModeDiv');
    const darkModeButton = document.getElementById('darkModeButton');
    if (darkModeOn) {
      setDarkModeOn(false);
      darkModeElement.style.cssText = 'mix-blend-mode: normal; background-color: white';
      darkModeButton.innerText = '🌚';
    } else {
      setDarkModeOn(true);
      darkModeElement.style.cssText = 'mix-blend-mode: difference; background-color: white';
      darkModeButton.innerText = '🌝';
    }
  }

  const value = {
    darkModeOn,
    darkMode
  };

  return(
    <DarkModeContext.Provider value={value}>
      { children }
      <Button variant="outline-success" onClick={darkMode} id='darkModeButton'>🌚</Button>
    </DarkModeContext.Provider>
  )
}



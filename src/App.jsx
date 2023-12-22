import React, { useState } from 'react';
import './App.css';

import imgOne from './assets/fefee.webp'
import imgTwo from './assets/tray_large.webp'

const App = () => {
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [go, setGo] = useState(false);

  const moveButton = () => {
    setIsButtonClicked(true); // Mark the button as clicked

    // Generate random positions within the container limits
    const randomTop = Math.random() * 300; // Adjust the value as per your container size
    const randomLeft = Math.random() * 300; // Adjust the value as per your container size

    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className='ws-app'>

      <div className="ws-flex">
        <img src={go ? imgOne : imgTwo} alt="" />
        <div className='ws-text'>{go ? "Гуд-гуд" : "Щось смачненьке хочеш їсти?"}</div>
        <div className="ws-btns">
          <button onClick={() => { setGo(true) }}>Так, ідемо</button>
          <button
            onClick={moveButton}
            style={isButtonClicked ? {
              position: 'absolute',
              top: `${buttonPosition.top}px`,
              left: `${buttonPosition.left}px`,
            } : null}
          >
            Ні
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;

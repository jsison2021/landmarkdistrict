
import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

import './App.css';
 
function App() {
    const [typeEffect] = useTypewriter({
      words: ['Shop','Work', 'Live'],
      loop: {},
      typeSpeed: 200,
      deleteSpeed: 100
    })
    return (
        <div className="App">
          <h1 className='title'>Landmark District</h1>
         
          <div className='animationLetters'>
            <p>Come to 
              <span className='wordChanging'> {typeEffect}</span>
              <span><Cursor cursorStyle = ' '  ></Cursor></span>
            </p>
           </div>
        </div>
    );
}
 
export default App;
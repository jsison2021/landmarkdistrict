import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

 
function Home() {
    const [typeEffect] = useTypewriter({
      words: ['Shop','Work', 'Live'],
      loop: {},
      typeSpeed: 200,
      deleteSpeed: 100
    })
    return (
        <div className="App">
        <p className='title'> Old Louisville</p>
        <div className='animationLetters'>
          <p>Come to 
            <span className='wordChanging'> {typeEffect}</span>
            <span><Cursor cursorStyle = ' '  ></Cursor></span>
          </p>
         </div>
      </div>
        
    );
}
 
export default Home;
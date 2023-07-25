import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image1 from './image1.jpeg'
import image2 from './image2.jpeg'

function Home() {
    const [typeEffect] = useTypewriter({
      words: ['Shop...','Work...', 'Live...'],
      loop: {},
      typeSpeed: 200,
      deleteSpeed: 100
    })

   
    return (
      <div >
          <div className='animationLetters'>
            <p>Come to 
              <span className='wordChanging'> {typeEffect}</span>
              <span><Cursor cursorStyle = ' '  ></Cursor></span>
            </p>
          </div>
          <Carousel className='slider'>
          
            <p><img src={image1} className = "mainPic" alt = "image1" /></p>
            <p><img src={image2} className = "mainPic" alt = "image2" /></p>
          </Carousel>
       
        
      </div>
    );
}
 
export default Home;
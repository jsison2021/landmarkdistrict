import React, { useEffect } from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useAnimateGroup } from 'react-simple-animate';

import image1 from './pictures/image1.jpeg'
import image2 from './pictures/image2.jpeg'

import Animation from './pageAnimations/Animation'
import HomeAnimation from './pageAnimations/HomeAnimation'

function Home() {
   
    return (
      <div>
          <Animation></Animation>
          <HomeAnimation></HomeAnimation>
          
          
          
          {/*
          <Carousel className='slider'>
          
            <p><img src={image1} className = "mainPic" alt = "image1" /></p>
            <p><img src={image2} className = "mainPic" alt = "image2" /></p>
          </Carousel>
          */}
         
      </div>
    );
}
 
export default Home;
import React from 'react';
import { useEffect, useState } from "react";
import { useAnimateGroup } from 'react-simple-animate';

import logo from '../pictures/Logo.png' 

function Animation() {
    const items = [ <img src={logo} className = "logo" alt = "logo" />,"Land","mark","District", <p className='dot'>.com</p>];

    const { styles, play, isPlaying } = useAnimateGroup({
        sequences: items.map(() => ({
          start: {opacity: 0, transform: "translateY(0)"},
          
      }))
      
    });
    
    
    useEffect(() => {
      play(!isPlaying)
     
    }, []);

    return (
      <div>
      
          <div className='animationBar'>
          {items.map((item, index) => (
          <span key={item} style={styles[index]}>
              <p className='landmarkAnimation'>{item}</p>
          </span>
          ))}
              
      </div>
       
          
          
       
       
        
      </div>
    )
}
export default Animation;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
import { useAnimateGroup } from 'react-simple-animate';

import { Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from './pictures/Logo.png'
import com from './pictures/com.png'

function Animation() {
    const items = [ <img src={logo} className = "logo" alt = "logo" />,"L", "a", "n", "d", "m","a", "r", "k", "D", "i", "s", "t","r", "i", "c", "t", <img src={com} className = "com" alt = "logo" />];
    
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
                <Nav.Link className ="addressBar" as = {Link} to = "/Contact" ><FontAwesomeIcon icon={faLocationDot} />  1148 S. 4th S</Nav.Link>
        </div>
      </div>
    )
}
export default Animation;
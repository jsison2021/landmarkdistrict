import React from 'react';
 
import anderson from './pictures/Anderson.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas, faPhone} from '@fortawesome/free-solid-svg-icons'
import Animation from './pageAnimations/Animation'
import { useEffect } from "react";
import OfficesAnimation from './pageAnimations/OfficesAnimation'
function Offices() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      }, []);
    return (
        <div>
            <Animation></Animation>
            <OfficesAnimation></OfficesAnimation>
            <div class='shopRow'>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                    <img src={anderson} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1205 S 3rd St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 637-3335</p>
                    </div>
                </div>

                <div class='shopColumn'>
                    
                </div>
                <div class='shopColumn'>
                       
                </div>
            </div>
        </div>
        
        
       
        
    );
}
 
export default Offices;
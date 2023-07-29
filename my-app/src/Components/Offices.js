import React from 'react';
 
import anderson from './pictures/Anderson.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas, faPhone} from '@fortawesome/free-solid-svg-icons'
import Animation from './pageAnimations/Animation'
import { useEffect } from "react";

import OfficesAnimation from './pageAnimations/OfficesAnimation'
import {motion} from 'framer-motion'
function Offices() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      }, []);
    return (
        <div>
            <Animation></Animation>
            <OfficesAnimation></OfficesAnimation>
            <div className='shopPage'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                        >
                        <div className='shopContainer'>
                            <div className='pictureContainer'>
                                <img src={anderson} className = "shopPictures" alt = "shopPictures" />
                            </div>
                            <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1205 S 3rd St, Louisville, KY 40203</p>    
                            <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /></p>
                            <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 637-3335</p>      
                        </div>
                        </motion.div>
                    </div>
                    <div className='col-sm-4'>
                        
                    </div>
                    <div className='col-sm-4'>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
        
       
        
    );
}
 
export default Offices;
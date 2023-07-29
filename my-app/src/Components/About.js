import React from 'react';
import Animation from './pageAnimations/Animation'
import {motion} from 'framer-motion'
import { useEffect } from "react";
function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
       
      }, []);
    return (
        
        <div>
            <Animation></Animation>
            <div className='container'>
                <motion.div  
                    className='title'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >

                Welcome to Landmark District
                </motion.div>
                
                <motion.div  className='aboutDesc'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >

                Located in Old Louisville - Midpoint between Downtown and University of Louisville
               
                </motion.div>

                <motion.div  className='aboutDesc'
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1 }}
                >
                     Enjoy the shops and resturants as you explore the history of Louisville
                </motion.div>
                
            </div>
        </div>
        
    );
}
 
export default About;
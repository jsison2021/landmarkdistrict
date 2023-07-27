import React from 'react';
import Animation from './Animation'
import {motion} from 'framer-motion'

function About() {
    return (
        
        <div>
            <Animation></Animation>
            <div className='container'>
                <motion.div  className='title'
                    inital = {{x: 0}}
                    animate = {{x: "25%"}}
                    transition = {{
                        duration: "3",
                        delay: "0.5"
                    }}
                >

                Welcome to Landmark District
                </motion.div>
                
                <motion.div  className='aboutDesc'
                    inital = {{x: 0}}
                    animate = {{ x: "2.5%"}}
                    transition = {{
                        duration: "3",
                        delay: "0.5"
                    }}
                >

                Located in Old Louisville - Midpoint between Downtown and University of Louisville
                
                </motion.div>

                <motion.div  className='aboutDesc'
                    inital = {{x: 0}}
                    animate = {{x: "2.5%"}}
                    transition = {{
                        duration: "3",
                        delay: "0.5"
                    }}
                >
                     Enjoy the shops and resturants as you explore the history of Louisville
                </motion.div>
                
            </div>
        </div>
        
    );
}
 
export default About;
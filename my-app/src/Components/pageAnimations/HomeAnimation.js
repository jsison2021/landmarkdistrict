import React from 'react';
import { useEffect } from "react";
import { useAnimateGroup } from 'react-simple-animate';
import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  
function Animation() {
    
    const items = [ "Restoring"," Old"," Louisville"];

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };
    const { styles, play, isPlaying } = useAnimateGroup({
        sequences: items.map(() => ({
          start: {opacity: 0, animationDelay: 10,transform: "translateY(0)"},
          
      }))
      
    });
    
    
    useEffect(() => {
        setTimeout(() => {
            play(!isPlaying)
          }, 1500);

    }, []);

    return (
      <div>
      
        <div className='animationBar2'>
            {items.map((item, index) => (
            <span key={item} style={styles[index]}>
                <p className='landmarkAnimation2'>{item}</p>
            </span>
            ))}
            <div className='lineDiv'>
                <motion.svg
                viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
                >
                <motion.line
                    className="lineAnimation"
                    x1="300"
                    y1="0"
                    x2="380"
                    y2="0"
                    stroke-width = "2px"
                    stroke="white"
                    variants={draw}
                    custom={2}
                />
                <motion.line
                    className="lineAnimation"
                    x1="300"
                    y1="0"
                    x2="220"
                    y2="0"
                    stroke-width = "2px"
                    stroke="white"
                    variants={draw}
                    custom={2}
                />
                
                </motion.svg>
            </div>
        </div>      
      </div>
    )
}
export default Animation;
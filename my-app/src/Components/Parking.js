import React from 'react';
import Animation from './pageAnimations/Animation'
import { useEffect } from "react";
import { motion } from "framer-motion";
import ParkingAnimation from './pageAnimations/ParkingAnimation'

function Parking() {
  useEffect(() => {
    window.scrollTo(0, 0);
   
  }, []);

  return (
   <div>
      <Animation></Animation>
      <ParkingAnimation></ParkingAnimation>
   </div>
  );
}
 
export default Parking;
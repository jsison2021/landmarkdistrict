import React from 'react';
import Animation from './pageAnimations/Animation'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParkingAnimation from './pageAnimations/ParkingAnimation'

function Parking() {

  return (
   <div>
      <Animation></Animation>
      <ParkingAnimation></ParkingAnimation>
   </div>
  );
}
 
export default Parking;
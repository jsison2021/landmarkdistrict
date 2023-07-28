import React from 'react';

import Animation from './pageAnimations/Animation'
import ResidenceAnimation from './pageAnimations/ResidenceAnimation'
import { useEffect } from "react";
function Residence() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      }, []);
    return (
        <div>
             <Animation></Animation>
             <ResidenceAnimation></ResidenceAnimation>
            <div class='shopRow'>
                <div class='shopColumn'>
                    
                </div>

                <div class='shopColumn'>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Residence;
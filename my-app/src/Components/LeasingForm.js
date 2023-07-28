import React from 'react';
import Animation from './pageAnimations/Animation'
import { useEffect } from "react";

function LeasingForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      }, []);
    return (
       <div>
            <Animation></Animation>
            <p className='leasingTitle'>Leasing Information</p>
            <p className='leasingInfo'>For leasing inquiries, please email josephimpellizzeri@gmail.com </p>
       </div>
        
    );
}
 
export default LeasingForm;
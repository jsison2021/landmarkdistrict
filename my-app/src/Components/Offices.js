import React from 'react';
 
import anderson from './Anderson.png'
import bottled from './Bottled.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas, faPhone} from '@fortawesome/free-solid-svg-icons'
function Offices() {

    return (
        <div>
            <div class='shopRow'>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                    <img src={anderson} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1205 S 3rd St, Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 637-3335</p>
                    </div>
                </div>

                <div class='shopColumn'>
                    <div className='shopContainer'>
                    <img src={bottled} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 412 W Oak St, Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://bottledliquors.com/">https://bottledliquors.com/</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 526-5030</p>
                    </div>
                </div>
            </div>
        </div>
        
        
       
        
    );
}
 
export default Offices;
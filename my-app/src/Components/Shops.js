import React from 'react';

import dreamlight from './Dreamlight.png'
import bottled from './Bottled.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas, faPhone} from '@fortawesome/free-solid-svg-icons'

function Shops() {

    return (
        <div>
            <div class='shopRow'>
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
                
                    <div class='shopColumn'>
                        <div className='shopContainer'>
                            <img src={dreamlight} className = "shopPictures" alt = "shopPictures" />
                            <p className='category'>ADDRESS</p>
                            <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1201 S 3rd St, Louisville, KY 40203</p>    
                            <p className='category'>WEBSITE</p>
                            <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://www.facebook.com/jcdreamlight/">https://www.facebook.com/jcdreamlight/</a></p>
                            <p className='category'>CONTACT</p>
                            <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 314-1117</p>
                        </div>
                    </div>

                
                
            </div>
        </div>
    );
}
 
export default Shops;
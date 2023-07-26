import React from 'react';

import dreamlight from './Dreamlight.png'
import bottled from './Bottled.png'
import soulFood from './soulFood.png'
import roofTop from './roofTop.png'
import FlurDeTea from './FlurDeTea.png'
import DollareGeneral_Logo from './DollareGeneral_Logo.png'
import metro from './Metro.png'
import coin from './coin.png'
import homestore from './homestore.png'

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
                        <img src={coin} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 401 W Oak St, Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://www.caribbeancoinlaundry.com/">www.caribbeancoinlaundry.com/</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> 502-654-7871</p>
                    </div>
                </div>

                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={DollareGeneral_Logo} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 418 W Oak St, Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://www.dollargeneral.com/">https://www.dollargeneral.com/</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 665-0698</p>
                    </div>
                </div>
            </div>

            <div class='shopRow'>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={dreamlight} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1201 S 3rd St, Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://www.facebook.com/jcdreamlight/">www.facebook.com/jcdreamlight/</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 314-1117</p>
                    </div>
                </div>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={FlurDeTea} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1212 S. 4th St. Suite 100 Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://www.fleurdetea.store/">https://www.fleurdetea.store//</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 742-9561</p>
                    </div>
                </div>
                
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={homestore} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1148 S 4th St, Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://homecenterky.com/">https://homecenterky.com/</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 384-5385</p>
                    </div>
                </div>
                
            </div>

            <div class='shopRow'>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={metro} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 403 W Oak St Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://www.metrobyt-mobile.com/">www.metrobyt-mobile.com/</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 618-2287</p>
                    </div>
                </div>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={roofTop} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 414 W Oak Street Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://www.facebook.com/rooftopgrillky/">www.facebook.com/rooftopgrillky/</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 618-2287</p>
                    </div>
                </div>
                
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={soulFood} className = "shopPictures" alt = "shopPictures" />
                        <p className='category'>ADDRESS</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 418 W Oak St, Louisville, KY 40203</p>    
                        <p className='category'>WEBSITE</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a href = "https://www.facebook.com/1DOLLARJUST1DOLLAR/">www.facebook.com/1DOLLARJUST1DOLLAR/</a></p>
                        <p className='category'>CONTACT</p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 963-1719</p>
                    </div>
                </div>
            </div>
            
        </div>

        
    );
}
 
export default Shops;
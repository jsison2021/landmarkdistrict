
import dreamlight from './pictures/Dreamlight.png'
import bottled from './pictures/Bottled.png'
import soulFood from './pictures/soulFood.png'
import roofTop from './pictures/roofTop.png'
import FlurDeTea from './pictures/FlurDeTea.png'
import DollareGeneral_Logo from './pictures/DollareGeneral_Logo.png'
import metro from './pictures/Metro.png'
import coin from './pictures/coin.png'
import homestore from './pictures/homestore.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas, faPhone} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';

import Animation from './pageAnimations/Animation'
import ShopsAnimation from './pageAnimations/ShopsAnimation'
function Shops() {
   
    useEffect(() => {
        window.scrollTo(0, 0);
       
      }, []);
    return (
        <div>
            <Animation></Animation>
            <ShopsAnimation></ShopsAnimation>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='shopContainer'>
                        <div className='pictureContainer'>
                            <img src={bottled} className = "shopPictures" alt = "shopPictures" />
                        </div>
                            <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 412 W Oak St, Louisville, KY 40203</p>    
                            <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink"href = "https://bottledliquors.com/">https://bottledliquors.com/</a></p>
                            <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 526-5030</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='shopContainer'>
                        <div className='pictureContainer'>
                            <img src={coin} className = "shopPictures" alt = "shopPictures" />
                        </div>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 401 W Oak St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.caribbeancoinlaundry.com/">www.caribbeancoinlaundry.com/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> 502-654-7871</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='shopContainer'>
                        <div className='pictureContainer'>
                            <img src={DollareGeneral_Logo} className = "shopPictures" alt = "shopPictures" />
                        </div>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 418 W Oak St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.dollargeneral.com/">https://www.dollargeneral.com/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 665-0698</p>
                    </div>
                </div>
            </div>
            {/** 
            <div class='shopRow'>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={bottled} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 412 W Oak St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink"href = "https://bottledliquors.com/">https://bottledliquors.com/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 526-5030</p>
                    </div>
                </div>
            
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={coin} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 401 W Oak St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.caribbeancoinlaundry.com/">www.caribbeancoinlaundry.com/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> 502-654-7871</p>
                    </div>
                </div>

                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={DollareGeneral_Logo} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 418 W Oak St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.dollargeneral.com/">https://www.dollargeneral.com/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 665-0698</p>
                    </div>
                </div>
            </div>

            <div class='shopRow'>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={dreamlight} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1201 S 3rd St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.facebook.com/jcdreamlight/">www.facebook.com/jcdreamlight/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 314-1117</p>
                    </div>
                </div>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={FlurDeTea} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1212 S. 4th St. Suite 100 Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.fleurdetea.store/">https://www.fleurdetea.store//</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 742-9561</p>
                    </div>
                </div>
                
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={homestore} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 1148 S 4th St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://homecenterky.com/">https://homecenterky.com/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 384-5385</p>
                    </div>
                </div>
                
            </div>

            <div class='shopRow'>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={metro} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 403 W Oak St Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.metrobyt-mobile.com/">www.metrobyt-mobile.com/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 618-2287</p>
                    </div>
                </div>
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={roofTop} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 414 W Oak Street Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.facebook.com/rooftopgrillky/">www.facebook.com/rooftopgrillky/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} />(502) 618-2287</p>
                    </div>
                </div>
                
                <div class='shopColumn'>
                    <div className='shopContainer'>
                        <img src={soulFood} className = "shopPictures" alt = "shopPictures" />
                        <p className='categoryDesc'><FontAwesomeIcon icon={faLocationDot} /> 418 W Oak St, Louisville, KY 40203</p>    
                        <p className='categoryDesc'><FontAwesomeIcon icon={faEarthAmericas} /> <a className= "weblink" href = "https://www.facebook.com/1DOLLARJUST1DOLLAR/">www.facebook.com/1DOLLARJUST1DOLLAR/</a></p>
                        <p className='categoryDesc'><FontAwesomeIcon icon={faPhone} /> (502) 963-1719</p>
                    </div>
                </div>
            </div>
            */}
        </div>

        
    );
}
 
export default Shops;
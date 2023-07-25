
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Offices from './Components/Offices';
import Residence from './Components/Residence';
import Shops from './Components/Shops';
import LeasingForm from './Components/LeasingForm';

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import libeccio from './libeccio.png'
import landmark from './landmark.png'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { 
  Navbar,
  Nav
} from 'react-bootstrap';

import './App.css';


function MainNavbar() {
    const [menu, setMenu] = useState(true)
    const [symbol, setSymbol] = useState(faBars)

    let menuActive = () =>{
        if (menu === false){
            setMenu(true)
            setSymbol(faBars)
        }
        if (menu === true){
            setMenu(false)
            setSymbol(faX)
        }
    }
    return (

        <BrowserRouter>
    
        <Navbar sticky = "top" className = "mainbar">
            <div >
                <div className='mobileMenu'>
                    <div className='topRow'>
                        <div className='topColumn'>
                        <Nav.Link className ="homebarlink" as = {Link} to = "/" onClick = {menuActive}><img src={landmark} className = "landmark" alt = "landmark" /></Nav.Link>
                        </div>
                        <div className='topColumn'>
                        <button className='menu' onClick={menuActive}><FontAwesomeIcon icon={symbol} /></button>
                        </div>
                    </div>
                    
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ="barlinks" as = {Link} to = "/Shops" onClick = {menuActive}>Shops</Nav.Link>}
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ="barlinks" as = {Link} to = "/Offices" onClick = {menuActive}>Offices</Nav.Link>}
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ="barlinks" as = {Link} to = "/Residence" onClick = {menuActive}>Residence</Nav.Link>}
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ="barlinks" as = {Link} to = "/About" onClick = {menuActive}>About</Nav.Link>}
                </div>
                <div className ='regularMenu'>
                    <Nav.Link className ="homebarlink" as = {Link} to = "/" > <img src={landmark} className = "landmark" alt = "landmark" /></Nav.Link>
                    {<Nav.Link className ="barlinks" as = {Link} to = "/Shops" >Shops</Nav.Link>}
                    {<Nav.Link className ="barlinks" as = {Link} to = "/Offices">Offices</Nav.Link>}
                    {<Nav.Link className ="barlinks" as = {Link} to = "/Residence" >Residences</Nav.Link>}
                    {<Nav.Link className ="barlinks" as = {Link} to = "/About" >About</Nav.Link>}
                    
                </div>
            </div>
            
        </Navbar>
     
        <Nav.Link className ="addressBar" as = {Link} to = "/Contact" ><FontAwesomeIcon icon={faLocationDot} />  1148 S. 4th S</Nav.Link>
            
    
        <Routes>
        <Route path = "/" exact element = {<Home/>}/>
        <Route path = "/Contact" exact element = {<Contact/>}/>
        <Route path = "/About" exact element = {<About/>}/>
        <Route path = "/Offices" exact element = {<Offices/>}/>
        <Route path = "/Residence" exact element = {<Residence/>}/>
        <Route path = "/Shops" exact element = {<Shops/>}/>
        <Route path = "/LeasingForm" exact element = {<LeasingForm/>}/>
        

        </Routes>
        
        <Navbar sticky = "bottom" className='bottombar'>
        <div className ='some-page-wrapper'>
            <div className='row'>
                <div className='column'>
                    <div className='bottombarlinksbold'>
                        Leasing Inquiries:      
                    </div>
                    <Nav.Link className ="bottombarlinks" as = {Link} to = "/LeasingForm" >Residential</Nav.Link>
                    <Nav.Link className ="bottombarlinks" as = {Link} to = "/LeasingForm" >Office</Nav.Link>
                    <Nav.Link className ="bottombarlinks" as = {Link} to = "/LeasingForm" >Retail</Nav.Link>
                </div>
                <div className='column'>
                   <Nav.Link className ="bottombarlinks" as = {Link} to = "/About" >About</Nav.Link>
                   <Nav.Link className ="bottombarlinks" as = {Link} to = "/Contact" >Contact</Nav.Link>
                </div>
                <div className='column'>
                    <button className='link'>
                        <a href="https://libecciolimited.com/" target="_blank" rel="noreferrer" >
                            <img src={libeccio} className = "libeccio" alt = "libeccio" />
                        </a>
                    </button>

                </div>
                <div className='column'>
                    <p className='copyright'>© 2023 Landmark District All Rights Reserved</p>
                </div>
            </div>
            
        </div>
        </Navbar>

        </BrowserRouter>

        
    );
}

export default MainNavbar;
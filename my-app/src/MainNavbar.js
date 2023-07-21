
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
import { faBars } from '@fortawesome/free-solid-svg-icons'

import libeccio from './libeccio.png'

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
    const [menu, setMenu] = useState(false)

    let menuActive = () =>{
       if (menu === false){
           setMenu(true)
       }
       if (menu === true){
           setMenu(false)
       }
    }
    return (

        <BrowserRouter>
    
        <Navbar sticky = "top" className = "mainbar" >
            <div className='mobileMenu'>
                <Nav.Link className ="homebarlink" as = {Link} to = "/" >Landmark District</Nav.Link>
                <button className='menu' onClick={menuActive}><FontAwesomeIcon icon={faBars} /></button>
                {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ="barlinks" as = {Link} to = "/Offices" onClick = {menuActive}>Offices</Nav.Link>}
                {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ="barlinks" as = {Link} to = "/Residence" onClick = {menuActive}>Residence</Nav.Link>}
                {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ="barlinks" as = {Link} to = "/Shops" onClick = {menuActive}>Shops</Nav.Link>}
                {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ="barlinks" as = {Link} to = "/About" onClick = {menuActive}>About</Nav.Link>}
            </div>
             <div className ='regularMenu'>
                <Nav.Link className ="homebarlink" as = {Link} to = "/" >Landmark District</Nav.Link>
                {<Nav.Link className ="barlinks" as = {Link} to = "/Offices">Offices</Nav.Link>}
                {<Nav.Link className ="barlinks" as = {Link} to = "/Residence" >Residences</Nav.Link>}
                {<Nav.Link className ="barlinks" as = {Link} to = "/Shops" >Shops</Nav.Link>}
                {<Nav.Link className ="barlinks" as = {Link} to = "/About" >About</Nav.Link>}
            </div>        
        </Navbar>
    
        <Routes>
        <Route path = "/" exact element = {<Home/>}/>
        <Route path = "/Contact" exact element = {<Contact/>}/>
        <Route path = "/About" exact element = {<About/>}/>
        <Route path = "/Offices" exact element = {<Offices/>}/>
        <Route path = "/Residence" exact element = {<Residence/>}/>
        <Route path = "/Shops" exact element = {<Shops/>}/>
        <Route path = "/LeasingForm" exact element = {<LeasingForm/>}/>
        

        </Routes>
        
        <Navbar fixed = "bottom" className='bottombar'>
        <div class='some-page-wrapper'>
            <div class='row'>
                <div class='column'>
                    <div class='bottombarlinksbold'>
                        Leasing Inquiries:      
                    </div>
                    <Nav.Link className ="bottombarlinks" as = {Link} to = "/LeasingForm" >Residential</Nav.Link>
                    <Nav.Link className ="bottombarlinks" as = {Link} to = "/LeasingForm" >Office</Nav.Link>
                    <Nav.Link className ="bottombarlinks" as = {Link} to = "/LeasingForm" >Retail</Nav.Link>
                </div>
                <div class='column'>
                   <Nav.Link className ="bottombarlinks" as = {Link} to = "/About" >About</Nav.Link>
                   <Nav.Link className ="bottombarlinks" as = {Link} to = "/Contact" >Contact</Nav.Link>
                </div>
                <div class='column'>
                    <button className='libecciolink'>
                        <a href="https://libecciolimited.com/" target="_blank" rel="noreferrer" >
                            <img src={libeccio} className = "libeccio" alt = "libeccio" />
                        </a>
                    </button>

                </div>
            </div>
            
        </div>
        <p className='copyright'>© 2023 Landmark District All Rights Reserved</p>
        </Navbar>

        </BrowserRouter>

        
    );
}

export default MainNavbar;
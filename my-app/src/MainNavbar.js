import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Offices from './Components/Offices';
import Residence from './Components/Residence';
import Shops from './Components/Shops';
import LeasingForm from './Components/LeasingForm';
import Parking from './Components/Parking';

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX,} from '@fortawesome/free-solid-svg-icons'

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
    const [barstyle1, setBarStyle1] = useState("barlinks")
    const [barstyle2, setBarStyle2] = useState("barlinks")
    const [barstyle3, setBarStyle3] = useState("barlinks")
    const [barstyle4, setBarStyle4] = useState("barlinks")
    const [barstyle5, setBarStyle5] = useState("barlinks")
    const [barstyle6, setBarStyle6] = useState("barlinks")
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

    let activeLink1 = () =>{
        if (barstyle1 === "barlinks" ){
            setBarStyle1("barlinks2")
            setBarStyle2("barlinks")
            setBarStyle3("barlinks")
            setBarStyle4("barlinks")
            setBarStyle5("barlinks")
            setBarStyle6("barlinks")
        }
       
    }
   
    let activeLink2 = () =>{
        if (barstyle2 === "barlinks" ){
            setBarStyle1("barlinks")
            setBarStyle2("barlinks2")
            setBarStyle3("barlinks")
            setBarStyle4("barlinks")
            setBarStyle5("barlinks")
            setBarStyle6("barlinks")
        }   
       
    }
    let activeLink3 = () =>{
        if (barstyle3 === "barlinks" ){
            setBarStyle1("barlinks")
            setBarStyle2("barlinks")
            setBarStyle3("barlinks2")
            setBarStyle4("barlinks")
            setBarStyle5("barlinks")
            setBarStyle6("barlinks")
        }   
    }
   
    let activeLink4 = () =>{
        if (barstyle2 === "barlinks" ){
            setBarStyle1("barlinks")
            setBarStyle2("barlinks")
            setBarStyle3("barlinks")
            setBarStyle4("barlinks2")
            setBarStyle5("barlinks")
            setBarStyle6("barlinks")
        }   
    }
   
    let activeLink5 = () =>{
        if (barstyle5 === "barlinks" ){
            setBarStyle1("barlinks")
            setBarStyle2("barlinks")
            setBarStyle3("barlinks")
            setBarStyle4("barlinks")
            setBarStyle5("barlinks2")
            setBarStyle6("barlinks")
        }   
    }
   
    let activeLink6 = () =>{
        if (barstyle6 === "barlinks" ){
            setBarStyle1("barlinks")
            setBarStyle2("barlinks")
            setBarStyle3("barlinks")
            setBarStyle4("barlinks")
            setBarStyle5("barlinks")
            setBarStyle6("barlinks2")
        }   
    }
   
   
    return (

        <BrowserRouter>
        {/* 
        <Routes>
            <Route path = "/" exact element = {<Animation/>}/>

        </Routes>
        */}
        
        <Navbar sticky = "top" className = "mainbar">
            <div className ='regularMenu'>
                <div className='topRow'>
                    <div className='topColumn-left'>
                        <Nav.Link className = {barstyle1} as = {Link} onClick = {activeLink1} to = "/" > Home</Nav.Link>
                    </div>
                    <div className='topColumn-center'>
                        {<Nav.Link className = {barstyle2} as = {Link} onClick = {activeLink2} to = "/Shops" >Shops</Nav.Link>}
                        {<Nav.Link className = {barstyle3} as = {Link} onClick = {activeLink3} to = "/Offices">Offices</Nav.Link>}
                        {<Nav.Link className = {barstyle4} as = {Link} onClick = {activeLink4} to = "/Residence" >Residences</Nav.Link>}
                        {<Nav.Link className = {barstyle5} as = {Link} onClick = {activeLink5} to = "/Parking" >Parking</Nav.Link>}
                    </div>
                    <div className='topColumn-right'>
                        {<Nav.Link className = {barstyle6} as = {Link} onClick = {activeLink6} to = "/About" >About</Nav.Link>}
                    </div>
                </div>
            </div>
            <div className='mobileMenu'>
                <div className='menuDiv'>
                    <p className='menuDesc'>Menu</p>
                    <button className='menuButton' onClick={menuActive}><FontAwesomeIcon icon={symbol} /></button>
                </div>
                <div className='menu'>
                    {menu ?  <Nav.Link></Nav.Link> :  <Nav.Link className ={barstyle1} as = {Link} to = "/" onClick = {() => {activeLink1();menuActive();}}> Home</Nav.Link>}
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ={barstyle2} as = {Link} to = "/Shops" onClick = {() => {activeLink2();menuActive();}}>Shops</Nav.Link>}
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ={barstyle3} as = {Link} to = "/Offices" onClick = {() => {activeLink3();menuActive();}}>Offices</Nav.Link>}
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ={barstyle4} as = {Link} to = "/Residence" onClick = {() => {activeLink4();menuActive();}}>Residence</Nav.Link>}
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ={barstyle5}as = {Link} to = "/Parking" onClick = {() => {activeLink5();menuActive();}}>Parking</Nav.Link>}
                    {menu ?  <Nav.Link></Nav.Link> : <Nav.Link className ={barstyle6} as = {Link} to = "/About" onClick = {() => {activeLink6();menuActive();}}>About</Nav.Link>}
                </div>
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
            <Route path = "/Parking" exact element = {<Parking/>}/>

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
                    <p className='copyright'>© 2023 Landmark District All Rights Reserved</p>
                </div>
            </div>
            
        </div>
        </Navbar>
        
        </BrowserRouter>

        
    );
}

export default MainNavbar;

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Offices from './Components/Offices';
import Residence from './Components/Residence';
import Shops from './Components/Shops';

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
  return (

    <BrowserRouter>
   
    <Navbar sticky = "top" className = "mainbar" >
      <Nav.Link className ="homebarlink" as = {Link} to = "/" >Landmark District</Nav.Link>
      <Nav.Link className ="barlinks" as = {Link} to = "/Offices" >Offices</Nav.Link>
      <Nav.Link className ="barlinks" as = {Link} to = "/Residence" >Residence</Nav.Link>
      <Nav.Link className ="barlinks" as = {Link} to = "/Shops" >Shops</Nav.Link>
      <Nav.Link className ="barlinks" as = {Link} to = "/About" >About</Nav.Link>
      
    </Navbar>
  
    <Routes>
      <Route path = "/" exact element = {<Home/>}/>
      <Route path = "/Contact" exact element = {<Contact/>}/>
      <Route path = "/About" exact element = {<About/>}/>
      <Route path = "/Offices" exact element = {<Offices/>}/>
      <Route path = "/Residence" exact element = {<Residence/>}/>
      <Route path = "/Shops" exact element = {<Shops/>}/>
      

    </Routes>
    
    <Navbar fixed = "bottom" className = "bottombar" >
     <p>© 2023 Landmark District All Rights Reserved</p>
     <Nav.Link className ="barlinks" as = {Link} to = "/Contact" >Contact</Nav.Link>
     </Navbar>

    </BrowserRouter>

    
  );
}

export default MainNavbar;
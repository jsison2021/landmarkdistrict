import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
const google = window.google;
function Home() {
    const [typeEffect] = useTypewriter({
      words: ['Shop','Work', 'Live'],
      loop: {},
      typeSpeed: 200,
      deleteSpeed: 100
    })

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAewvSSykXCJCtug3_cJm7WBIe90iGJdNk",
    });

    if (!isLoaded) return<div>Loading...</div>
    return (
        <div className="App">
        <GoogleMap 
          zoom={10}
          center= {{lat:44,lng: -80}}
        >
        </GoogleMap>
        <div className='animationLetters'>
          <p>Come to 
            <span className='wordChanging'> {typeEffect}</span>
            <span><Cursor cursorStyle = ' '  ></Cursor></span>
          </p>
         </div>
      </div>
        
    );
}
 
export default Home;


import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 38.2363136426519,
    lng: -85.76134541349491
  };
  
function Contact() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAewvSSykXCJCtug3_cJm7WBIe90iGJdNk"
      })

      return  (
        <div>
        <p className='contactTitle'>Contact</p>
        <p className='contactInfo'>Questions or comments, please give us a call at (502) 526-5276.</p>
        <p className='directionsTitle'>Directions</p>
        {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          
        >
          {  <Marker position={{ lat: 38.2363136426519, lng: -85.76134541349491 }} /> }
          <></>
        </GoogleMap>
        ) : <p>Loading..</p>}
        </div>
    );
}
 
export default Contact;
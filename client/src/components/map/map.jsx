import React, { Component } from 'react';
import { Map, Marker, Circle, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    
    const { google } = this.props;

    // Define the city name and its coordinates
    const city = 'London';
    const cityCoordinates = { lat: 51.509865, lng: -0.118092}; 
    
    const mapStyles = {
        width: '30rem',
        height: '18rem',
        
      };// Replace with the actual coordinates of the city

    return (
    <div className='map'>  <Map
        google={google}
        zoom={12}
        initialCenter={cityCoordinates}
        center={cityCoordinates}
        style={mapStyles}
      >
        <Marker position={cityCoordinates} />
        <Circle
          center={cityCoordinates}
          radius={5000} // Adjust the circle radius as desired
          strokeColor="#FF0000" // Adjust the circle stroke color as desired
          strokeOpacity={0.8} // Adjust the circle stroke opacity as desired
          strokeWeight={2} // Adjust the circle stroke weight as desired
          fillColor="#FF0000" // Adjust the circle fill color as desired
          fillOpacity={0.35} // Adjust the circle fill opacity as desired
        />
      </Map>
      </div>
    );
    
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg' // Replace with your Google Maps API key
})(MapContainer);

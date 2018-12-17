import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";



class Maps extends Component {
  
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div className="mapFather">
       
        <Map google={this.props.google} 
         style={style}
        Center={{
          lat: this.props.lat,
          lng: this.props.lng,
        }}
        zoom={15}
        onClick={this.mapClicked}>

    
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDRivfQDKbdyJeeXPj9ed6oP9QU-_wXJeg")
})(Maps)

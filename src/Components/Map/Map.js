import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    console.log("your database id is:", props.data)
    axios.get(url + "/givemelocationdetails/" + props.data)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Jaime ' + (1 + 1) }
          position = {{ lat: 39.648209, lng: -75.711185 }}
          data = {"1234yourdatabaseid"} 
        />
        <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            <div>
              <h1>{1 + 1}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

// 1. populate your mongo with a seed for events, at least 100
// 2. provide the list of events through an express endpoint (the 100 items of it) GET /events from the server
// 3. do an axios call from the front end in order to retrieve such a list
// 4. loop through the previously mentioned list using .map() so you can generate a 100 markers

export default GoogleApiWrapper(
  (props) => ({
    apiKey: "AIzaSyDRivfQDKbdyJeeXPj9ed6oP9QU-_wXJeg"
  }
))(GoogleMapsContainer)
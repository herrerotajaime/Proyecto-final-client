import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import GetMeeting from '../../auth/GetMeeting';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      meetings:null
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.GetMeeting = new GetMeeting();
  }
  takeMeeting=()=>{
    this.GetMeeting.meeting()
    .then(data=>this.setState({...this.state, meetings: data}))
    
  }
  onMarkerClick = (props, marker, e) => {
    console.log("your database id is:", props.data)
    //  this.service.get("meeting")
    //  .then(response => response.data)
    //  console.log()
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
  componentWillMount=()=>{
    this.takeMeeting()
  }
  render() {
    const style = {
      width: '50vw',
      height: '50vh',
      'marginLeft': '1 px',
      // 'marginRight':
    }
   
    console.log(this.state)
      if(this.state.meetings){
        return (
          <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 10 }
        initialCenter = {{ lat: 40.648209, lng: -3.711185 }}
      >
      {this.state.meetings.map(ele => {
        return ( 
   
         <Marker
      onClick = { this.onMarkerClick }
      title = {ele.name}
      position = {{ lat:ele.lat, lng: ele.lng }}
      data = {"1234yourdatabaseid"} 
    />
        )})}
         <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.title}</h1>
              </div>
          </InfoWindow>
          </Map>
         
    )
      }else{
        return <p>Loading...</p>
      }
      
  }
}

// 1. populate your mongo with a seed for events, at least 100
// 2. provide the list of events through an express endpoint (the 100 items of it) GET /events from the server
// 3. do an axios call from the front end in order to retrieve such a list
// 4. loop through the previously mentioned list using .map() so you can generate a 100 markers


// 1a. implement the search people section
// 2a. finish off the css and layout for the whole app
// 3a. finish off both the map (with the infowindow displaying the right marker info) plus complete the search people section totally
export default GoogleApiWrapper(
  (props) => ({
    apiKey: "AIzaSyDRivfQDKbdyJeeXPj9ed6oP9QU-_wXJeg"
  }
))(GoogleMapsContainer)
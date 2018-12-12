import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false,
    };
  }

  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          ...this.state,
          currentLatLng: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    }
  }
  render() {
    const style = {
      width: "100%",
      height: "90%"
    };
    return (
      <div>
        <Map
          class="Map"
          google={this.props.google}
          style={style}
          center={this.state.currentLatLng}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker
            name={"Your position"}
            position={this.state.currentLatLng}
            icon={{
              url:
                "https://lh3.googleusercontent.com/-HC9CYmcjF3E/U3N2rnp-W3I/AAAAAAAABMw/qSJAzyyGp1o/w265-h353-n/14%2B-%2B2",
              anchor: new this.props.google.maps.Point(32, 32),
              scaledSize: new this.props.google.maps.Size(52, 64)
            }}
          />
        </Map>
      </div>
    );
  }
}
export default showCurrentLocation;
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapPage extends Component {

    static defaultProps = {
        center: {
          lat: 26.00811,
          lng: -80.28011
        },
        zoom: 11
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAYvh2WDpzG5PImRfO-9k-gChzC-1C12kA" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={26.00811}
                lng={-80.28011}
                text="Feeding South Florida"
              />
            </GoogleMapReact>
          </div>
        );
      }
}
export default MapPage;

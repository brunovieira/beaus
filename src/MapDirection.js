import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

const TOKEN = 'AIzaSyCzCpjNbpbgW8W4MPlS8G-XgUJRDyCSBAg';

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${TOKEN}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
		const mapLink = `https://www.google.com/maps/dir/Current+Location/${props.latitudeDestination},${props.longitudeDestination}`;
		return <GoogleMap
			defaultZoom={5}
			defaultCenter={{ lat: 43.653908, lng: -79.384293 }}
		>
			{ props.latitudeDestination && <Marker position={{ lat: props.latitudeDestination, lng: props.longitudeDestination}}  />}
			{ props.latitudeDestination && <a href={mapLink} target='_blank'>Get Direction</a> }
		</GoogleMap>
	}
);

class MapDirection extends Component {
	render() {		
    return (
			<MapComponent latitudeDestination={this.props.store.latitude} 
				longitudeDestination={this.props.store.longitude}/>
    );
	}
}

export default MapDirection;

	
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  return (
    <Map
      style={{}}
      google={props.google}
      zoom={16}
      style={{
        height: "30rem",
        width: "50rem",
      }}
      initialCenter={{
        lat: 14.619313,
        lng: 120.979608,
      }}
    >
      <Marker name={"Ariankitektura"} />
    </Map>
  );
};

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyCHj_5e1aWReFiVoqEJNBzeFW9iOtzV4cs",
}))(MapContainer);

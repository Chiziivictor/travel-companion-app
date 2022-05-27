import React from "react";
import { styled, useMediaQuery } from "@mui/material";
import GoogleMapReact from "google-map-react";

const MapContainer = styled("div")(() => ({
  height: "85vh",
  width: "100%",
}));

const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lng: 0 };

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCwFalxBvlUio2rIYhnpbS-AozxvfjCfcQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </MapContainer>
  );
};

export default Map;

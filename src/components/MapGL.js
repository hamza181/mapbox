import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function MapGL() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 24.8341537,
    longitude: 67.2577588,
    zoom: 15,
    // pitch: 40,
  });
  return (
    <ReactMapGL
      {...viewport}
      //   mapStyle="mapbox://styles/mapbox/dark-v10"
      //   mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapboxApiAccessToken={
        "pk.eyJ1IjoiaGFtemExODEiLCJhIjoiY2t2dHkxNGRlMDFzZjJvdG5iM3hjZ2drcCJ9.iYw187W81pRALG7WDbovWA"
      }
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker
        latitude={24.8341537}
        longitude={67.2577588}
        offsetLeft={-20}
        offsetTop={-10}
      >
      {/* <i class="fas fa-map-marker-alt" style={{color: "#EA4335", fontSize: 30}}></i> */}
        {/* <div>You are here</div> */}
        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
            height={viewport.zoom * 2.5}
            width={viewport.zoom * 2.5}
        />
      </Marker>
    </ReactMapGL>
  );
}

export default MapGL;

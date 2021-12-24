import { useEffect, useState } from 'react';

import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';

import LayoutDashboard from '../layout/layoutDashboard';
import 'mapbox-gl/dist/mapbox-gl.css';


const Map = () => {
  // https://www.npmjs.com/package/react-map-gl
  // https://www.npmjs.com/package/react-google-maps
  const ipApiKey = import.meta.env.VITE_APP_IPINFO_API_KEY
  const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZ2Vvcmdpb3MtdWJlciIsImEiOiJjanZidTZzczAwajMxNGVwOGZrd2E5NG90In0.gdsRu_UeU_uPi9IulBruXA";

  const [viewport, setViewport] = useState({
    width: 1200,
    height: 800,
    latitude: 39.4697,
    longitude: -0.3774,
    zoom: 15,
    sizeScale: 4000,
    pitch: 55,
  })

   useEffect(() => {
    (async () => {
      
      fetch(`https://ipinfo.io?token=${ipApiKey}`)
        .then(res => res.json())
        .then(res => {
          let loc = res.loc.split(',')
          setViewport({
            ...viewport,
            latitude: parseFloat(loc[0]),
            longitude: parseFloat(loc[1])
          })
        })

    })();
   }, []);
  
/*   const data = { loc: "39.4697,-0.3774" }
  
  let hola = data.loc.split(',')
   console.log('hola', hola); */
   
  return (
    <LayoutDashboard  title={"MAP"}>
      <ReactMapGL
        {...viewport}
        width="100%"
       //height="100%"
       // mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      >
        <Marker latitude={39.4697} longitude={-0.3774} offsetLeft={-20} offsetTop={-10}>
          <svg
        height={SIZE}
        viewBox="0 0 24 24"
        style={{
          cursor: 'pointer',
          fill: '#DD0000',
          stroke: 'none',
          transform: `translate(${-SIZE / 2}px, ${-SIZE}px)`
        }}
       
      >
          <path d={ICON} />
        </svg>
        </Marker>
        {/* <GeolocateControl style={geolocateStyle}/> */}
      </ReactMapGL>
    </LayoutDashboard>
  );
};

export default Map;

const SIZE = 20;
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
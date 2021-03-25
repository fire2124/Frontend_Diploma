// import React from 'react';
// import { render } from 'react-dom';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import HeatmapLayer from '../src/HeatmapLayer';
// import { addressPoints } from './realworld.10000.js';
 
// class MapExample extends React.Component {
 
//   render() {
//     const position = [48.99, 21.244];

//     return (
//       <div>
//         <MapContainer center={position} zoom={13}>
//           <HeatmapLayer
//             fitBoundsOnLoad
//             fitBoundsOnUpdate
//             points={addressPoints}
//             longitudeExtractor={m => m[1]}
//             latitudeExtractor={m => m[0]}
//             intensityExtractor={m => parseFloat(m[2])} />
//           <TileLayer
//             url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//         </MapContainer>
//       </div>
//     );
//   }
 
// }

// export default MapExample;

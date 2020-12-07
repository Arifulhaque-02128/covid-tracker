import React from 'react';
import { Circle, MapContainer as LeafletMap, Popup, TileLayer } from 'react-leaflet';
import ChangeView from './ChangeView';

const Map = ({ zoom, center, info, caseType }) => {
    return (
        <div>
            <LeafletMap className="map-container" center={center} zoom={zoom} scrollWheelZoom={false}>
                <ChangeView center={center} zoom={zoom} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    info && info.map(({ country, countryInfo, cases, recovered, deaths }) => (
                        <Circle
                        key={country}
                        center={[countryInfo.lat, countryInfo.long]}
                        pathOptions={caseType==="recovered" ? { color: "lightGreen" } : { color: "tomato" } }
                        radius={(caseType==="cases" && (Math.sqrt(cases)*250)) || (caseType==="recovered" && (Math.sqrt(recovered)*350)) || (caseType==="deaths" && (Math.sqrt(deaths)*1500))}>
                            <Popup>
                                <div className="popup-style">
                                    <img src={countryInfo.flag} alt=""/>
                                    <h6 className="mt-2 text-secondary">{country}</h6>
                                    <p className="text-secondary">Total Cases: {new Intl.NumberFormat("en-IN").format(cases)}<br/> 
                                    Total Recovered: {new Intl.NumberFormat("en-IN").format(recovered)}<br/>
                                    Total Deaths: {new Intl.NumberFormat("en-IN").format(deaths)}</p>
                                </div>
                            </Popup>
                        </Circle>
                    ))
                }
            </LeafletMap>
        </div>

    );
};

export default Map;
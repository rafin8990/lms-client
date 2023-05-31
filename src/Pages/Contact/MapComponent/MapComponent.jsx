import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const MapComponent = () => {
    return (
        <div className='h-96 w-96'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=nYn0KIctijTH8XZtFq8u"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                       Swachh Akshar
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
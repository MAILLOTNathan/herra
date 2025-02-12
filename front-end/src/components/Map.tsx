import { useState, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function Map() {
    const [currentBounds, setCurrentBounds] = useState<[[number, number], [number, number]]>([[51.49, -0.08], [51.5, -0.06]]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentBounds([[position.coords.latitude, position.coords.longitude], [position.coords.latitude + 0.01, position.coords.longitude + 0.02]]);
        });
    }, []);

    return (
        <div className="z-0" style={{ zIndex: -1 }}>
            <MapContainer bounds={currentBounds} style={{ height: "85vh", width: "100%", zIndex: 0 }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        );
}
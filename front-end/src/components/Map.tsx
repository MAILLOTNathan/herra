import { useState, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

export default function Map() {
    const [currentBounds, setCurrentBounds] = useState<[[number, number], [number, number]] | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentBounds([[position.coords.latitude, position.coords.longitude], [position.coords.latitude, position.coords.longitude]]);
        });
        const defaultIcon = L.icon({
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
        });
        L.Marker.prototype.options.icon = defaultIcon;
    }, []);

    return (
        <div className="z-0" style={{ zIndex: -1 }}>
            {currentBounds ? (
                <MapContainer bounds={currentBounds} style={{ height: "85vh", width: "100%", zIndex: 0 }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[currentBounds[0][0], currentBounds[0][1]]}>
                        <Popup>
                            Vous êtes ici
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
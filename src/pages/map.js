import React, { useState } from 'react';
import Coffee from '../components/extra/Coffee/Coffee';
import Nav from '../components/Nav/Nav';

const Map = () => {
    const [mapError, setMapError] = useState(false);

    return (
        <div className="map">
            <Coffee />
            <Nav selected="map" focused={true} />
            {!mapError ? (
                <iframe
                    className="mapContainer"
                    src="https://mapproxy.craftnepal.net"
                    // frameBorder="0" // Use camelCase
                    allowFullScreen // Use camelCase
                    onError={() => setMapError(true)}
                    title="Map" // Add a title for accessibility
                />
            ) : (
                <div className="contentTitle whitetext">
                    Error showing map
                    <div className="normaltext">
                        please fall back to
                        <a href="https://mapproxy.craftnepal.net">Original MAP</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Map;

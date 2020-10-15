import React, { useEffect, useState } from "react";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";
import "leaflet/dist/leaflet.css";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Map Marker" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>
        <footer>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>
      <Map
        center={[-30.0588712, -51.1676956]}
        zoom={17}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages
          ? orphanages.map((orphanage) => {
              return (
                <Marker
                  key={orphanage.id}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                >
                  <Popup
                    closeButton={false}
                    minWidth={240}
                    maxWidth={240}
                    className="map-popup"
                  >
                    {orphanage.name}
                    <Link to={`/orphanages/${orphanage.id}`}>
                      <FiArrowRight size={20} color="#fff" />
                    </Link>
                  </Popup>
                </Marker>
              );
            })
          : ""}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

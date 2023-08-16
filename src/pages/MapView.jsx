
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Leaflet kütüphanesi
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import SideDetails from '../components/SideDetails';

import airplaneIcon from '../assets/airplane.png'; 

const MapView = ({ setShowDetail, openDetail }) => {
    const store = useSelector((store) => store);
    
  
    const airplaneMarkerIcon = L.icon({
        iconUrl: airplaneIcon,
        iconSize: [20, 20], 
        iconAnchor: [16, 16], // İkonun ortasını işaret eden nokta
    });

    return (
        <div>
            {/* Harita alanı */}
            <MapContainer center={[39.146078, 34.159499]} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Herbir uçuş için ekranda uçağın konumuna denk gelen marker'ları özelleştirilmiş ikonlarla bas */}
                {store?.flights.map((fly, i) => (
                    <Marker key={i} position={[fly.lat, fly.lan]} icon={airplaneMarkerIcon}>
                        <Popup>
                            <div className="popup">
                                <span>Kod: {fly.code}</span>
                                <button className='detail-btn' onClick={() => openDetail(fly.id)}>Detay</button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default MapView;

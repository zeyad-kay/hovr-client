import Map from '../components/Map/Map';
import { Marker } from '../components/Marker/Marker';

function Calculate() {
    return (
        <Map fullscreenControl={true} FullscreenControlOptions center={{ lat: 30.0444, lng: 31.2357 }} zoom={10} disableDefaultUI={true}>
            <Marker location={{ lat: 30.0444, lng: 31.2357 }} />
        </Map>
    )
}
export default Calculate;
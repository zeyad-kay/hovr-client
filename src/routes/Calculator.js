import { useEffect, useState } from 'react';
import Map from '../components/Map/Map';
import { Marker } from '../components/Marker/Marker';

function Calculate() {
    // const [text, setText] = useState('ab');
    const [pos, setPos] = useState({ lat: 30.0444, lng: 31.2357 })
    // useEffect(() => {
    //     setTimeout(() => {
    //         setText('asd');
    //     }, 5000)
    // });
    // useEffect(() => {
    //     setTimeout(() => {
    //         setPos({ lat: 30.0444, lng: 32.2357 });
    //     }, 5000)
    // }, []);
    return (
        <>
            <Map center={{ lat: 30.0444, lng: 31.2357 }} zoom={10} disableDefaultUI={true}>
                <Marker location={pos} />
            </Map>
        </>
    )
}
export default Calculate;
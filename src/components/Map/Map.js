import React, { useEffect, useState } from 'react';
import { MapStyle } from '../../lib/MapStyle';

const Map = (props) => {
    const [loaded, setLoaded] = useState(false);
    const API_KEY = "";
    // const dispatch = useDispatch();

    useEffect(() => {
        renderMap();
    });
    const renderMap = () => {
        // if (!loaded) {
            window.initMap = initMap;
            loadScript(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`);
            setLoaded(true);
        // }
    }

    const initMap = () => {
        //to Convert The value comming from the prop as string TO real position Control By google maps
        const mapFakeControlToRealControl = {
            'TOP_LEFT': window.google.maps.ControlPosition.TOP_LEFT,
            'TOP_CENTER': window.google.maps.ControlPosition.TOP_CENTER,
            'TOP_RIGHT': window.google.maps.ControlPosition.TOP_RIGHT,
            'LEFT_TOP': window.google.maps.ControlPosition.LEFT_TOP,
            'RIGHT_TOP': window.google.maps.ControlPosition.RIGHT_TOP,
            'LEFT_CENTER': window.google.maps.ControlPosition.LEFT_CENTER,
            'RIGHT_CENTER': window.google.maps.ControlPosition.RIGHT_CENTER,
            'LEFT_BOTTOM': window.google.maps.ControlPosition.LEFT_BOTTOM,
            'RIGHT_BOTTOM': window.google.maps.ControlPosition.LEFT_BOTTOM,
            'BOTTOM_CENTER': window.google.maps.ControlPosition.BOTTOM_CENTER,
            'BOTTOM_LEFT': window.google.maps.ControlPosition.BOTTOM_LEFT,
            'BOTTOM_RIGHT': window.google.maps.ControlPosition.BOTTOM_RIGHT
        }
        //creating the google map with some options you can acess these options from the prop om Map Component
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: props.center,
            zoom: props.zoom,
            styles: props.style || MapStyle,
            disableDefaultUI: props.disableDefaultUI,
            zoomControl: props.zoomControl,
            zoomControlOptions: {
                ...props.zoomControlOptions,
                position: (props.zoomControlOptions && props.zoomControlOptions.position) ? mapFakeControlToRealControl[props.zoomControlOptions.position] : undefined
            },
            mapTypeControl: props.mapTypeControl,
            mapTypeControlOptions: {
                ...props.MapTypeControlOptions,
                position: (props.mapTypeControlOptions && props.mapTypeControlOptions.position) ? mapFakeControlToRealControl[props.mapTypeControlOptions.position] : undefined
            },
            streetViewControl: props.streetViewControl,
            streetViewControlOptions: {
                ...props.streetViewControlOptions,
                position: (props.streetViewControlOptions && props.streetViewControlOptions.position) ? mapFakeControlToRealControl[props.streetViewControlOptions.position] : undefined
            },
            rotateControl: props.rotateControl,
            rotateControlOptions: {
                ...props.RotateControlOptions,
                position: (props.rotateControlOptions && props.rotateControlOptions.position) ? mapFakeControlToRealControl[props.rotateControlOptions.position] : undefined
            },
            scaleControl: props.scaleControl,
            scaleControlOptions: {
                ...props.scaleControlOptions,
                position: (props.scaleControlOptions && props.scaleControlOptions.position) ? mapFakeControlToRealControl[props.scaleControlOptions.position] : undefined
            },
            fullscreenControl: props.fullscreenControl,
            fullscreenControlOptions: {
                ...props.fullscreenControlOptions,
                position: (props.fullscreenControlOptions && props.fullscreenControlOptions.position) ? mapFakeControlToRealControl[props.fullscreenControlOptions.position] : undefined

            }
        });
        //make any drawing on map either it marker or somthing else 
        if (props.children[0]) {
            props.children.forEach(child => {
                child.type.prototype.renderFunction(map, child.props);
            });
        } else {
            props.children.type.prototype.renderFunction(map, props.children.props);
        }

    }

    return (
        <main>
            <div id="map" style={{ height: "100vh" }}></div>
        </main>
    );
}

export default Map;

function loadScript(url) {
    console.log('loading');
    const index = window.document.getElementsByTagName("script")[0];
    const googleMapScript = window.document.createElement("script");
    googleMapScript.src = url;
    googleMapScript.defer = true;
    index.parentNode.insertBefore(googleMapScript, index);
}
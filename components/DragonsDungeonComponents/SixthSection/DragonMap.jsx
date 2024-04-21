'use client'

import React, {useEffect, useState} from 'react';
import {Map, Placemark, YMaps, ZoomControl} from "@pbe/react-yandex-maps";

function DragonMap(props) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    return (
        <YMaps>
            <Map
                width={width <= 800 ? 300 : width <= 1200 ? 750 : 500}
                height={width <= 800 ? 300 : 500}
                defaultState={{
                    center: [55.965375, 43.065908],
                    zoom: 17,
                }}
            >
                <Placemark geometry={[55.965375, 43.065908]} />
                <ZoomControl options={{ float: "right" }} />
            </Map>
        </YMaps>
    );
}

export default DragonMap;
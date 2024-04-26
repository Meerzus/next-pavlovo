'use client'

import React, {useEffect, useState} from 'react';
import {Map, Placemark, YMaps, ZoomControl} from "@pbe/react-yandex-maps";

function DragonMap(props) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    return (
        // <YMaps>
        //     <Map
        //         width={width <= 800 ? 300 : width <= 1200 ? 750 : 500}
        //         height={width <= 800 ? 300 : 400}
        //         defaultState={{
        //             center: [55.965375, 43.065908],
        //             zoom: 17,
        //         }}
        //     >
        //         <Placemark geometry={[55.965375, 43.065908]}/>
        //         <ZoomControl options={{float: "right"}}/>
        //     </Map>
        // </YMaps>
        // <div style="position:relative;overflow:hidden;"><a
        //     href="https://yandex.ru/maps/org/podzemelye_drakona/124769354004/?utm_medium=mapframe&utm_source=maps"
        //     style="color:#eee;font-size:12px;position:absolute;top:0px;">Подземелье Дракона</a><a
        //     href="https://yandex.ru/maps/11082/pavlovo/category/organization_of_children_events/184108327/?utm_medium=mapframe&utm_source=maps"
        //     style="color:#eee;font-size:12px;position:absolute;top:14px;">Организация и проведение детских праздников в
        //     Павлово</a>
        //     <iframe
        //         src="https://yandex.ru/map-widget/v1/?ll=43.065908%2C55.965376&mode=search&oid=124769354004&ol=biz&z=16.67"
        //         width="560" height="400" frameBorder="1" allowFullScreen="true" style="position:relative;"></iframe>
        // </div>
        <div style={{position: 'relative', overflow: 'hidden'}}>
            <a href="https://yandex.ru/maps/org/podzemelye_drakona/124769354004/?utm_medium=mapframe&utm_source=maps"
               style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>
                Подземелье Дракона
            </a>
            <a href="https://yandex.ru/maps/11082/pavlovo/category/organization_of_children_events/184108327/?utm_medium=mapframe&utm_source=maps"
               style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>
                Организация и проведение детских праздников в Павлово
            </a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=43.065908%2C55.965376&mode=search&oid=124769354004&ol=biz&z=16.67"
                    // width={width <= 800 ? '300' : width <= 1200 ? '750' : '500'} height={width <= 800 ? '300' : '400'}
                    width={width <= 800 ? '560' : width <= 1200 ? '560' : '560'} height={width <= 800 ? '400' : '400'}
                    frameBorder="1" allowFullScreen="true" style={{position: 'relative'}}>
            </iframe>
        </div>
    );
}

export default DragonMap;
'use client'

import React, {useEffect, useState} from 'react';

function IgrolendMap(props) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    return (
        <div style={{position: 'relative', overflow: 'hidden'}}>
            <a href="https://yandex.ru/maps/org/igrolend/181595742435/?utm_medium=mapframe&utm_source=maps"
               style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Игролэнд</a>
            <a href="https://yandex.ru/maps/11082/pavlovo/category/organization_of_children_events/184108327/?utm_medium=mapframe&utm_source=maps"
               style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>
                Организация и проведение детских праздников в Павлово</a>
            <a href="https://yandex.ru/maps/11082/pavlovo/category/play_room/191472689672/?utm_medium=mapframe&utm_source=maps"
            style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '28px'}}>Игровая комната в Павлово</a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=43.066124%2C55.967658&mode=search&oid=181595742435&ol=biz&z=17.13"
                width={width <= 800 ? '300' : width <= 1200 ? '750' : '500'} height={width <= 800 ? '300' : '400'}
                frameBorder="1" allowFullScreen="true" style={{position: 'relative'}}></iframe>
        </div>
    );
}

export default IgrolendMap;
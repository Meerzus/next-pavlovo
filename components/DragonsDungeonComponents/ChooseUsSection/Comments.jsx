'use client'

import React, {useEffect, useState} from 'react';

function Comments(props) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    return (
        <div style={{width: width < 575 ? '300px' : '560px', height: '800px', overflow: 'hidden', position: 'relative', marginTop: '20px'}}>
            <iframe style={{
                width: '100%',
                height: '100%',
                border: '1px solid #e6e6e6',
                borderRadius: '8px',
                boxSizing: 'border-box'
            }}
                    src="https://yandex.ru/maps-reviews-widget/124769354004?comments"></iframe>
            <a href="https://yandex.ru/maps/org/podzemelye_drakona/124769354004/" target="_blank"
               style={{
                   boxSizing: 'border-box',
                   textDecoration: 'none',
                   color: '#b3b3b3',
                   fontSize: '10px',
                   fontFamily: 'YS Text,sans-serif',
                   padding: '0 20px',
                   position: 'absolute',
                   bottom: '8px',
                   width: '100%',
                   textAlign: 'center',
                   left: '0'
               }}>Подземелье
                Дракона на карте Павлово — Яндекс Карты</a></div>
    );
}

export default Comments;
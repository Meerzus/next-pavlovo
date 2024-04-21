'use client'

import React, {useEffect, useState} from 'react';

function NavToggle(props) {
    const [isWindow, setIsWindow] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 1200) {
            setIsWindow(true)
        }
    }, []);

    return (
        <button id={'nav-toggle'} onClick={() => {
            document.getElementById('header-nav').classList.toggle('nav-open')
            document.getElementById('nav-toggle').classList.toggle('nav-toggle-open')
        }}
                style={{display: isWindow && 'none'}}
        >
            {/*123*/}
            <span></span>
            <span></span>
        </button>
    );
}

export default NavToggle;
'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";

function CallMeHeaderNav(props) {
    const [isWindow, setIsWindow] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 1200) {
            setIsWindow(true)
        }
    }, []);
    return !isWindow && (
        <Link href={'tel:+79101448287'}><h4>Связаться с нами</h4></Link>
    );
}

export default CallMeHeaderNav;
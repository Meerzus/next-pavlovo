'use client'

import React, {useEffect, useMemo, useRef, useState} from 'react';

function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    ), [ref])


    useEffect(() => {
        observer.observe(ref.current)
        return () => observer.disconnect(ref.current)
    }, [])

    return isIntersecting
}

function TypeWriter(props) {
    const ref = useRef(null)
    const [width, setWidth] = useState(0)
    // const isVisible = useOnScreen(ref)

    const animate = async () => {
        const lines = ref.current;

        const observer = new IntersectionObserver(entries => {
            setTimeout(() => {
                lines.classList.toggle( 'type-writer', entries[1].isIntersecting );
            }, 100)
        });


        document.addEventListener("DOMContentLoaded", function(){
            observer.observe(lines);
        });
    }

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        const lines = ref.current;
        lines.classList.toggle( 'type-writer')
    }, [isVisible]);

    return width > 1200 ? (
        <div id="type-writer" ref={ref}>
            <span className={'type'}>
                Дети будут в восторге! Праздник в <span id="dragon"> Игролэнде </span> станет
                незабываемым для Вашего ребенка!
            </span>
        </div>
    ) : (
        <h2>Дети будут в восторге! Праздник в <span id="dragon"> Игролэнде </span> станет
            незабываемым для Вашего ребенка!</h2>
    );
}

export default TypeWriter;
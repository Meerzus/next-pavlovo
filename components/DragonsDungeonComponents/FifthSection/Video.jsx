'use client'

import React, {useEffect, useState} from 'react';

function Video({width, height, igrolend}) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [videoSrc, setVideoSrc] = useState('')

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        if (!igrolend) {
            setVideoSrc('/video.mp4')
        } else if (igrolend && screenWidth > 1200) {
            setVideoSrc('/igrolendVideo-full.mp4')
        } else if (igrolend && screenWidth <= 1200) {
            setVideoSrc('/igrolendVideo.mp4')
        }
    }, [screenWidth]);

    console.log(videoSrc)

    return (
        <video width={width} height={height} controls muted>
            {
                videoSrc &&
                <source src={videoSrc} type="video/mp4"/>
            }
            {/*{!igrolend && <source src={'/video.mp4'} type="video/mp4"/>}*/}
            {/*{(screenWidth > 1200 && igrolend) && <source src={'/igrolendVideo-full.mp4'} type="video/mp4"/>}*/}
            {/*{(screenWidth <= 1200 && igrolend) && <source src={'/igrolendVideo.mp4'} type="video/mp4"/>}*/}
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;

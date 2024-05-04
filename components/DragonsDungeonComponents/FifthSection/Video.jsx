'use client'

import React from 'react';

function Video({width, height, igrolend}) {
    return (
        <video width={width} height={height} controls muted>
            <source src={igrolend ? '/igrolendVideo.mp4' : "/video.mp4"} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;

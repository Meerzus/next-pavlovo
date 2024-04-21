'use client'

import React from 'react';

function Video({width, height}) {
    return (
        <video width={width} height={height} controls muted>
            <source src="/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;

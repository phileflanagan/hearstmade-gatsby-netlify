import React from 'react';
export const VideoLede = ({ id }) => (
    <div className="lede__video loading-gradient">
        <div
            className="vid__parent"
            style={{ padding: '56.25% 0 0 0', position: 'relative' }}
        >
            <iframe
                title="Video Sizzle"
                src={`https://player.vimeo.com/video/${id}?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&dnt=1&`}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            />
        </div>
    </div>
);

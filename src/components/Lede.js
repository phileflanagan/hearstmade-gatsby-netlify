import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const VideoLede = ({ id, data }) => {
    const { edges: images } = data.allFile;
    const poster = images[0].node;
    return (
        <div className="lede__video">
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
                        height: '100%',
                        opacity: '1',
                    }}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                />
            </div>
            <PreviewCompatibleImage
                imageStyle={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    zIndex: '-1',
                }}
                imageInfo={{
                    image: poster,
                    alt: `Hearst Magazine Logos`,
                }}
            />
        </div>
    );
};

export default (props) => (
    <StaticQuery
        query={graphql`
            query VideoLede {
                allFile(filter: { relativeDirectory: { eq: "posters" } }) {
                    edges {
                        node {
                            childImageSharp {
                                fluid(maxWidth: 1000, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => <VideoLede id={props.id} data={data} />}
    />
);

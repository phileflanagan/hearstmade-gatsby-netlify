import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

// import './About.sass';

const About = ({ data }) => {
    const { edges: images } = data.allFile;
    const imageDesktopEntry = images.filter(image =>
        image.node.childImageSharp.fluid.src.endsWith('-desktop.png')
    );
    const imageDesktop = imageDesktopEntry.length
        ? imageDesktopEntry[0].node
        : '';
    console.log(imageDesktop);
    return (
        <section className="vertPadding subtle">
            <div className="container">
                <h1>Hello, We Are HearstMade:</h1>
                <p>
                    A team of editors, writers, designers, photo directors,
                    talent bookers and video producers who love nothing more
                    than a well-crafted story. It’s our job to connect our
                    partners’ needs with Hearst’s hyper-engaged audience of 300
                    million.
                </p>
                <p style={{ marginBottom: '2.2rem' }}>
                    Through a combination of data-driven insight and editorial
                    instinct we create stories that not only get attention but
                    drive action. We call this “Content with Purpose.”
                </p>
                <PreviewCompatibleImage
                    imageStyle={{ margin: 0 }}
                    imageInfo={{
                        image: imageDesktop,
                        alt: `Hearst Magazine Logos`
                    }}
                />
            </div>
        </section>
    );
};

export default () => (
    <StaticQuery
        query={graphql`
            query About {
                allFile(filter: { relativeDirectory: { eq: "magazines" } }) {
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
        render={data => <About data={data} />}
    />
);

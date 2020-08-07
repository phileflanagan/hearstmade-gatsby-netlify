import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import './About.sass';

const About = ({ data }) => {
    const { edges: images } = data.allFile;
    const imageDesktopEntry = images.filter((image) =>
        image.node.childImageSharp.fluid.src.endsWith('-desktop.png')
    );
    const imageDesktop = imageDesktopEntry.length
        ? imageDesktopEntry[0].node
        : '';

    return (
        <section className="vertPadding light" id="about">
            <div className="container">
                <div className="panel">
                    <h1 className="text-center f400">About Us</h1>
                    <p>
                        We are a team of passionate creators: editors, writers,
                        art directors, video producers, and talent bookers who
                        love nothing more than a well-crafted story. Whether
                        we’re creating branded content programs to connect our
                        partners with Hearst’s hyper-engaged audiences or
                        producing custom content programs for our partners to
                        use in their own environments, we always employ a
                        combination of data-driven insight and editorial
                        instinct. Being part of Hearst means our data signals
                        span industries and passion points and our editors are
                        in constant conversation with audiences of all kinds.
                        The result: stories that not only get attention but
                        drive action. We call this “Content with Purpose.”
                    </p>
                </div>
                <PreviewCompatibleImage
                    imageStyle={{ margin: 0 }}
                    imageInfo={{
                        image: imageDesktop,
                        alt: `Hearst Magazine Logos`,
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
        render={(data) => <About data={data} />}
    />
);

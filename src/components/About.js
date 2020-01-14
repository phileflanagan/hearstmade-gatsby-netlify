import React from 'react';
import { graphql, Link } from 'gatsby';

// import './About.sass';

const About = ({ data }) => {
    console.log('Homepage Data', data);
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
                <p>
                    Through a combination of data-driven insight and editorial
                    instinct we create stories that not only get attention but
                    drive action. We call this “Content with Purpose.”
                </p>
            </div>
        </section>
    );
};

export default About;

export const aboutQuery = graphql`
    query About {
        allFile {
            edges {
                node {
                    relativePath
                }
            }
        }
    }
`;

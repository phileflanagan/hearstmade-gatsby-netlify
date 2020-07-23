import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Stats from '../components/Stats';
import CaseStudyRoll from '../components/CaseStudyRoll';
import Contacts from '../components/Contacts';
import About from '../components/About';
import Tagline from '../components/Tagline';
import TwoPane from '../components/TwoPane';
import VideoLede from '../components/Lede';

export const IndexPageTemplate = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
}) => (
    <div>
        <VideoLede id={383342485} />
        <Tagline />
        <TwoPane />
        <CaseStudyRoll />
        <Contacts />
    </div>
);

// IndexPageTemplate.propTypes = {
//     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     title: PropTypes.string,
//     heading: PropTypes.string,
//     subheading: PropTypes.string,
//     mainpitch: PropTypes.object,
//     description: PropTypes.string,
//     intro: PropTypes.shape({
//         blurbs: PropTypes.array,
//     }),
// };

const IndexPage = () => {
    // const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate />
        </Layout>
    );
};
// <IndexPageTemplate
// image={frontmatter.image}
// title={frontmatter.title}
// heading={frontmatter.heading}
// subheading={frontmatter.subheading}
// mainpitch={frontmatter.mainpitch}
// description={frontmatter.description}
// intro={frontmatter.intro}
// />
// IndexPage.propTypes = {
//     data: PropTypes.shape({
//         markdownRemark: PropTypes.shape({
//             frontmatter: PropTypes.object,
//         }),
//     }),
// };

export default IndexPage;

// export const pageQuery = graphql`
//     query IndexPageTemplate {
//         markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//             frontmatter {
//                 title
//                 image {
//                     childImageSharp {
//                         fluid(maxWidth: 1024, quality: 100) {
//                             ...GatsbyImageSharpFluid_withWebp
//                         }
//                     }
//                 }
//                 heading
//                 subheading
//                 mainpitch {
//                     title
//                     description
//                 }
//                 description
//                 intro {
//                     blurbs {
//                         image {
//                             childImageSharp {
//                                 fluid(maxWidth: 240, quality: 64) {
//                                     ...GatsbyImageSharpFluid
//                                 }
//                             }
//                         }
//                         text
//                     }
//                     heading
//                     description
//                 }
//             }
//         }
//     }
// `;

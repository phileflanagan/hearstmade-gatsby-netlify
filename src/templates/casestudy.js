import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import '../components/CaseStudy.sass';

export const CaseStudyTemplate = data => {
    const PostContent = data.contentComponent || data.Content;
    const image = data.featuredimage;
    console.log({ data });
    return (
        <section className="section case-study">
            <div class="splash splash__loading loading-gradient" />
            <div
                className="splash"
                style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp
                            ? image.childImageSharp.fluid.src
                            : image
                    })`,
                    backgroundPosition: `center center`
                }}
            ></div>
            <div className="title dark">
                {data.headline && <h1>{data.headline}</h1>}
                {data.subhead && <h2>{data.subhead}</h2>}
            </div>
            <PostContent content={data.content} className={'light'} />
        </section>
    );
};

// CaseStudyTemplate.propTypes = {
//     content: PropTypes.node.isRequired,
//     contentComponent: PropTypes.func,
//     description: PropTypes.string,
//     title: PropTypes.string,
//     helmet: PropTypes.object
// };

const CaseStudy = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <CaseStudyTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Case Study">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                headline={post.frontmatter.headline}
                subhead={post.frontmatter.subhead}
                featuredimage={post.frontmatter.featuredimage}
            />
        </Layout>
    );
};

CaseStudy.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object
    })
};

export default CaseStudy;

export const pageQuery = graphql`
    query CaseStudyByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                description
                headline
                subhead
                tags
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

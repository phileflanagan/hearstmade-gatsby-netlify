import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import useSiteMetadata from '../components/SiteMetadata';
import Helmet from 'react-helmet';

import './CaseStudyGallery.sass';

const CaseStudyGallery = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;
    const { title: metaTitle } = useSiteMetadata();
    return (
        <div className="card-container light">
            <Helmet titleTemplate={`${metaTitle} | %s `}>
                <title>Case Studies</title>
                <meta
                    name="description"
                    content={`See the work we've done with other clients.`}
                />
            </Helmet>
            {posts &&
                posts.map(({ node: post }, i) => (
                    <Link to={post.fields.slug} key={post.id}>
                        <div className="card df flex-column light">
                            <figure>
                                {post.frontmatter.featuredimage ? (
                                    <PreviewCompatibleImage
                                        imageStyle={{ margin: 0 }}
                                        imageInfo={{
                                            image:
                                                post.frontmatter.featuredimage,
                                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                        }}
                                    />
                                ) : null}
                            </figure>
                            <aside className="centerXY flex-column">
                                <h5 className="m0">{post.frontmatter.title}</h5>
                            </aside>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

CaseStudyGallery.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
            query CaseStudyGallery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "casestudy" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                featuredpost
                                featuredimage {
                                    childImageSharp {
                                        fluid(maxWidth: 1000, quality: 100) {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <CaseStudyGallery data={data} count={count} />}
    />
);

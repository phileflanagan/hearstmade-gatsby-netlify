import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import './CaseStudyGallery.sass';

class CaseStudyGallery extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div className="card-container dark">
                <style>{`body{background-color:#333}`}</style>
                {posts &&
                    posts.map(({ node: post }, i) => (
                        <Link to={post.fields.slug}>
                            <div
                                className="card df flex-column dark"
                                key={post.id}
                            >
                                <figure>
                                    {post.frontmatter.featuredimage ? (
                                        <PreviewCompatibleImage
                                            imageStyle={{ margin: 0 }}
                                            imageInfo={{
                                                image:
                                                    post.frontmatter
                                                        .featuredimage,
                                                alt: `featured image thumbnail for post ${post.frontmatter.title}`
                                            }}
                                        />
                                    ) : null}
                                </figure>
                                <aside className="centerXY flex-column">
                                    <h5 className="m0">
                                        {post.frontmatter.title}
                                    </h5>
                                </aside>
                            </div>
                        </Link>
                    ))}
            </div>
        );
    }
}

CaseStudyGallery.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
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
                                            ...GatsbyImageSharpFluid
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

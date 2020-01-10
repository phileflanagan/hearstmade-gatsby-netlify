import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import './CaseStudyRoll.sass';

class CaseStudyRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div className="c_casestudyroll dark">
                {posts &&
                    posts.map(({ node: post }, i) => (
                        <Link className="button" to={post.fields.slug}>
                            <div className="row df flex-row" key={post.id}>
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
                                <aside
                                    className={`centerXY flex-column ${
                                        i % 2 === 0 ? 'flex-first' : 'flex-last'
                                    }`}
                                >
                                    <small>Case Study</small>
                                    <h2>{post.frontmatter.title}</h2>
                                    <button className="button">Explore</button>
                                </aside>
                            </div>
                        </Link>
                    ))}
            </div>
        );
    }
}

CaseStudyRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export default () => (
    <StaticQuery
        query={graphql`
            query CaseStudyRoll {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: {
                            templateKey: { eq: "casestudy" }
                            featuredpost: { eq: true }
                        }
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
        render={(data, count) => <CaseStudyRoll data={data} count={count} />}
    />
);

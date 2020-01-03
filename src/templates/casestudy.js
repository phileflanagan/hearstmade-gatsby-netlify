import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const CaseStudyTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    featuredpost,
    headline,
    subhead,
    body,
    helmet
}) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <pre>
                    {JSON.stringify(
                        {
                            content,
                            contentComponent,
                            description,
                            tags,
                            title,
                            featuredpost,
                            headline,
                            subhead,
                            body,
                            helmet
                        },
                        null,
                        2
                    )}
                </pre>
            </div>
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
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                featuredpost
                headline
                subhead
                body
            }
        }
    }
`;

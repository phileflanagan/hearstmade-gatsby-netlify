import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import Stats from '../components/Stats';
import CaseStudyRoll from '../components/CaseStudyRoll';

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
	<div>
		<div className="lede__video">
			<div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
				<iframe
					src="https://player.vimeo.com/video/383342485?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1"
					style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
					frameBorder="0"
					allow="autoplay; fullscreen"
					allowFullScreen
				/>
			</div>
			<script src="https://player.vimeo.com/api/player.js" />
		</div>
		<section>
			<CaseStudyRoll />
		</section>
		<section className="vertPadding subtle">
			<div className="container">
				<h1>Hello, We Are HearstMade:</h1>
				<p>
					A team of editors, writers, designers, photo directors, talent bookers and video producers who love
					nothing more than a well-crafted story. It’s our job to connect our partners’ needs with Hearst’s
					hyper-engaged audience of 300 million.
				</p>
				<p>
					Through a combination of data-driven insight and editorial instinct we create stories that not only
					get attention but drive action. We call this “Content with Purpose.”
				</p>
			</div>
		</section>
		<Stats />
		<section className="vertPadding subtle">
			<div className="container df flex-row">
				<figure>
					<figcaption>Business Inquiries</figcaption>
				</figure>
				<figure>
					<figcaption>Career Inquiries</figcaption>
				</figure>
				<figure>
					<figcaption>Press Inquiries</figcaption>
				</figure>
			</div>
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	})
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`;

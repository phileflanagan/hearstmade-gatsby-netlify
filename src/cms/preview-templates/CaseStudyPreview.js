import React from 'react';
import PropTypes from 'prop-types';
import { CaseStudyTemplate } from '../../templates/casestudy';

const CaseStudyPreview = ({ entry, getAsset, widgetFor }) => {
	const tags = entry.getIn([ 'data', 'tags' ]);
	const featuredImage = entry.getIn([ 'data', 'featuredimage' ]);
	const featuredImageAsset = getAsset(featuredImage).value;
	console.log('CaseStudyPreview', widgetFor('body'));
	return (
		<CaseStudyTemplate
			content={widgetFor('body')}
			description={entry.getIn([ 'data', 'description' ])}
			tags={tags && tags.toJS()}
			title={entry.getIn([ 'data', 'title' ])}
			headline={entry.getIn([ 'data', 'headline' ])}
			subhead={entry.getIn([ 'data', 'subhead' ])}
			featuredimage={featuredImageAsset}
		/>
	);
};

{
	/* <
<CaseStudyTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    tags={post.frontmatter.tags}
    title={post.frontmatter.title}
    headline={post.frontmatter.headline}
    subhead={post.frontmatter.subhead}
    featuredimage={post.frontmatter.featuredimage}
/> */
}

CaseStudyPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default CaseStudyPreview;

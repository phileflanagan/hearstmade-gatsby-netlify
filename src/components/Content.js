import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = ({ content, className }) => {
	const contentWithClass = content.replace(/<p><span/g, "<p class='full-width'");
	return <div className={className} dangerouslySetInnerHTML={{ __html: contentWithClass }} />;
};

const Content = ({ content, className }) => <div className={className}>{content}</div>;

Content.propTypes = {
	content: PropTypes.node,
	className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;

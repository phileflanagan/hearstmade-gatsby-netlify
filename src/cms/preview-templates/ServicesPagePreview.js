import React from 'react';
import { ServicesPageTemplate } from '../../templates/services-page';

const ServicesPagePreview = ({ entry, widgetFor }) => (
	<ServicesPageTemplate title={entry.getIn([ 'data', 'title' ])} content={widgetFor('body')} />
);

export default ServicesPagePreview;

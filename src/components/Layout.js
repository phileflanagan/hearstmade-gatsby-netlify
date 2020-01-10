import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './__global__.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from '../utils/typography';

import favicon64 from '../brand/favicon.png';
import favicon192 from '../brand/logo-192.png';
import favicon512 from '../brand/logo-512.png';

const TemplateWrapper = ({ children }) => {
	const { title, description } = useSiteMetadata();
	return (
		<div style={{ minHeight: '100vh' }} className="df flex-column">
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="dns-prefetch" href="//skyfire.vimeocdn.com" />
				<link rel="apple-touch-icon" sizes="512x512" href={favicon512} />
				<link rel="icon" type="image/png" href={favicon192} sizes="192x192" />
				<link rel="icon" type="image/png" href={favicon64} sizes="64x64" />

				<meta name="theme-color" content="#222" />
				<TypographyStyle typography={typography} />
				<GoogleFont typography={typography} />
				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
			</Helmet>
			<Navbar />
			<div style={{ marginTop: '56px', flex: '1 0 auto' }}>{children}</div>
			<Footer />
		</div>
	);
};

export default TemplateWrapper;

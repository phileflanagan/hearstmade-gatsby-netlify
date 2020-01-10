import React from 'react';
import Layout from '../components/Layout';
import useSiteMetadata from '../components/SiteMetadata';
import Helmet from 'react-helmet';

export const ServicesPageTemplate = () => <div />;

const ServicesPage = () => {
	const { title: metaTitle } = useSiteMetadata();
	return (
		<Layout>
			<Helmet titleTemplate={`${metaTitle} | %s `}>
				<title>Services</title>
				<meta name="description" content={`See the services HearstMade can provide`} />
			</Helmet>
			<section className="light vertPadding">
				<div className="container">
					<h1>Services</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo maximus maximus.
						Donec tincidunt est libero, et imperdiet erat egestas a. Vivamus malesuada sapien et consequat
						sodales. Suspendisse dapibus tellus a ligula accumsan, tristique pharetra metus facilisis.
						Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam id
						venenatis eros. Sed elit dui, mattis porttitor tristique id, varius ut risus. Proin vitae
						sollicitudin odio, vel volutpat lacus. Cras consequat quam eget mauris mattis, sit amet
						scelerisque orci finibus. Sed ullamcorper mattis eros eget volutpat. Interdum et malesuada fames
						ac ante ipsum primis in faucibus. Quisque id massa lacus. In hac habitasse platea dictumst.
						Etiam hendrerit semper nulla vitae rutrum.
					</p>
				</div>
			</section>
		</Layout>
	);
};

export default ServicesPage;

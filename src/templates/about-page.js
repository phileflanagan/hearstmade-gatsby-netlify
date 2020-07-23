import React from 'react';
import Layout from '../components/Layout';
import useSiteMetadata from '../components/SiteMetadata';
import Helmet from 'react-helmet';

import About from '../components/About';
import Contacts from '../components/Contacts';
import Stats from '../components/Stats';

export const AboutPageTemplate = () => <div />;

const AboutPage = () => {
    const { title: metaTitle } = useSiteMetadata();
    return (
        <Layout>
            <Helmet titleTemplate={`${metaTitle} | %s `}>
                <title>About</title>
                <meta name="description" content={`About HearstMade`} />
            </Helmet>
            <About />
            <Stats />
            <Contacts />
        </Layout>
    );
};

export default AboutPage;

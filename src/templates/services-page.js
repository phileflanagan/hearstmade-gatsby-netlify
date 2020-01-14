import React from 'react';
import Layout from '../components/Layout';
import useSiteMetadata from '../components/SiteMetadata';
import Helmet from 'react-helmet';

import Stats from '../components/Stats';
import Contacts from '../components/Contacts';
import ServiceChart from '../components/ServiceChart';

export const ServicesPageTemplate = () => <div />;

const ServicesPage = () => {
    const { title: metaTitle } = useSiteMetadata();
    return (
        <Layout>
            <Helmet titleTemplate={`${metaTitle} | %s `}>
                <title>Services</title>
                <meta
                    name="description"
                    content={`See the services HearstMade can provide`}
                />
            </Helmet>
            <ServiceChart />
            <Stats />
            <Contacts />
        </Layout>
    );
};

export default ServicesPage;

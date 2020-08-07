import React from 'react';

import Layout from '../../components/Layout';
import CaseStudyGallery from '../../components/CaseStudyGallery';

export default class CaseStudyIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className="full-width-image-container margin-top-0">
                    <h1
                        className="has-text-weight-bold is-size-1"
                        style={{
                            backgroundColor: 'white',
                            color: '#333',
                            padding: '1rem',
                            textAlign: 'center',
                            marginBottom: '0',
                        }}
                    >
                        Case Studies
                    </h1>
                </div>
                <section className="csg">
                    <CaseStudyGallery />
                </section>
            </Layout>
        );
    }
}

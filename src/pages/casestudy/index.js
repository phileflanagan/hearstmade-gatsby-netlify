import React from 'react';

import Layout from '../../components/Layout';
import CaseStudyGallery from '../../components/CaseStudyGallery';

export default class CaseStudyIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/blog-index.jpg')`
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-1"
                        style={{
                            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                            backgroundColor: '#333',
                            color: 'white',
                            padding: '1rem',
                            textAlign: 'center'
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

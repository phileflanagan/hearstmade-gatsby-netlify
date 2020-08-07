import React from 'react';
import Layout from '../../components/Layout';

export default () => (
    <Layout>
        <section className="subtle vertPadding">
            <div className="container">
                <div
                    className="panel text-center"
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                >
                    <h1>Thank you!</h1>
                    <p>Your message has been submitted.</p>
                </div>
            </div>
        </section>
    </Layout>
);

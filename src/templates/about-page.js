import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

const AboutPage = () => {
    return (
        <Layout>
            <section className="subtle vertPadding">
                <div className="container">
                    <h1>About HearstMade</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum commodo maximus maximus. Donec tincidunt est
                        libero, et imperdiet erat egestas a. Vivamus malesuada
                        sapien et consequat sodales. Suspendisse dapibus tellus
                        a ligula accumsan, tristique pharetra metus facilisis.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Etiam id venenatis eros.
                        Sed elit dui, mattis porttitor tristique id, varius ut
                        risus. Proin vitae sollicitudin odio, vel volutpat
                        lacus. Cras consequat quam eget mauris mattis, sit amet
                        scelerisque orci finibus. Sed ullamcorper mattis eros
                        eget volutpat. Interdum et malesuada fames ac ante ipsum
                        primis in faucibus. Quisque id massa lacus. In hac
                        habitasse platea dictumst. Etiam hendrerit semper nulla
                        vitae rutrum.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;

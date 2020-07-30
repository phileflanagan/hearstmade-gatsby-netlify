import React from 'react';
import { Link } from 'gatsby';

import './ServiceChart.sass';

const ServiceChart = () => {
    return (
        <section className="light vertPadding">
            <div className="container service-chart">
                <h1 className="text-center f400">
                    A full service offering leveraging creative, media and
                    marketing strategy to solve business challenges
                </h1>
                <section className="box">
                    <div className="subbox">
                        <h4 className="m0">Strategy</h4>
                        <ul>
                            <li>
                                Audience Development, Creative Messaging, Media
                                Targeting, Distribution, Revenue Generation
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="box boxlist">
                    <div className="subbox">
                        <h4 className="m0">Content Creation</h4>
                        <ul>
                            <li>Video</li>
                            <li>Photo</li>
                            <li>Social</li>
                            <li>Digital Display</li>
                            <li>Custom Publishing</li>
                        </ul>
                    </div>
                    <div className="subbox">
                        <h4 className="m0">Production</h4>
                        <ul>
                            <li>In-House Studio Space</li>
                            <li>Post-Production Facilities</li>
                            <li>Talent Team</li>
                            <li>Digital Development</li>
                        </ul>
                    </div>
                    <div className="subbox">
                        <h4 className="m0">Digital Marketing</h4>
                        <ul>
                            <li>Site Design / UX</li>
                            <li>Performance Media</li>
                            <li>SEO</li>
                            <li>Technology</li>
                            <li>Commerce Devleopment</li>
                        </ul>
                    </div>
                    <div className="subbox">
                        <h4 className="m0">Distribution</h4>
                        <ul>
                            <li>Audience Segmentation</li>
                            <li>Circulation</li>
                            <li>Fulfillment</li>
                            <li>Subscription Management</li>
                            <li>Loyalty</li>
                        </ul>
                    </div>
                    <div className="subbox">
                        <h4 className="m0">Monetization</h4>
                        <ul>
                            <li>Advertising Sales</li>
                            <li>Programmatic Optimization</li>
                            <li>Subscription Strategy</li>
                            <li>Strategic Partnerships</li>
                        </ul>
                    </div>
                </section>
                <section className="box">
                    <div className="subbox">
                        <h4 className="m0">
                            Proprietary Tools &amp; Technology
                        </h4>
                        <ul>
                            <li>Data Studio, MediaOS, Pubworx, CDS</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ServiceChart;

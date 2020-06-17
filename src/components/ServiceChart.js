import React from 'react';
import { Link } from 'gatsby';

import './ServiceChart.sass';

const ServiceChart = () => {
    return (
        <section className="light vertPadding">
            <div className="container service-chart">
                <p className="chart-header">
                    A full service offering that delivers what clients want
                </p>
                <section className="box">
                    <div className="subbox">
                        <h4 className="m0">Strategy</h4>
                        <ul>
                            <li>
                                Creative, Audience Engagement, Distribution,
                                Revenue Generation
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="box boxlist">
                    <div className="subbox">
                        <h4 className="m0">Content Creation</h4>
                        <ul>
                            <li>Video</li>
                            <li>Social</li>
                            <li>Magazine</li>
                            <li>Digital Display</li>
                        </ul>
                    </div>
                    <div className="subbox">
                        <h4 className="m0">Production</h4>
                        <ul>
                            <li>Studio Space</li>
                            <li>Post Production</li>
                            <li>Facilities</li>
                            <li>Talent Bookers</li>
                        </ul>
                    </div>
                    <div className="subbox">
                        <h4 className="m0">Digital Marketing</h4>
                        <ul>
                            <li>Site Design / UX</li>
                            <li>Performance Media</li>
                            <li>SEO</li>
                            <li>Technology / Dev</li>
                            <li>Digital Display</li>
                        </ul>
                    </div>
                    <div className="subbox">
                        <h4 className="m0">Distribution</h4>
                        <ul>
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

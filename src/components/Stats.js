import React from 'react';
import './Stats.sass';
const Stats = () => (
    <section className="stats vertPadding light">
        <div className="container df flex-row">
            <figure className="df flex-column">
                <figcaption>25</figcaption>
                <h5>US Sites</h5>
            </figure>
            <figure className="df flex-column">
                <figcaption>
                    100<small>MM</small>
                </figcaption>
                <h5>US Unique Visitors</h5>
            </figure>
            <figure className="df flex-column">
                <figcaption>
                    220<small>MM</small>
                </figcaption>
                <h5>Social Followers</h5>
            </figure>
            <figure className="df flex-column">
                <figcaption>
                    40<small>+</small>
                </figcaption>
                <h5>International Markets</h5>
            </figure>
        </div>
    </section>
);

export default Stats;

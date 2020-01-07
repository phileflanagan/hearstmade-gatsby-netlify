import React from 'react';
import './Stats.sass';
const Stats = () => (
	<section className="stats vertPadding light">
		<div className="container df flex-row">
			<figure className="df flex-column">
				<figcaption>25</figcaption>
				<span>US Sites</span>
			</figure>
			<figure className="df flex-column">
				<figcaption>
					100<small>MM</small>
				</figcaption>
				<span>US Unique Visitors</span>
			</figure>
			<figure className="df flex-column">
				<figcaption>
					220<small>MM</small>
				</figcaption>
				<span>Social Followers</span>
			</figure>
			<figure className="df flex-column">
				<figcaption>
					40<small>+</small>
				</figcaption>
				<span>International Markets</span>
			</figure>
		</div>
	</section>
);

export default Stats;

import React from 'react';
import { Link } from 'gatsby';

import towerIcon from '../brand/icons/tower.svg';
import hIcon from '../brand/icons/H.svg';
import pressIcon from '../brand/icons/press.svg';
import './Contacts.sass';

const Contacts = class extends React.Component {
	render() {
		return (
			<section className="vertPadding subtle contacts">
				<div className="container df flex-row centerXY">
					<figure className="centerXY flex-column">
						<Link to="/contact">
							<img className="icon icon__large" src={towerIcon} />
							<h6 className="m0">Business Inquiries</h6>
						</Link>
					</figure>
					<figure className="centerXY flex-column">
						<a href="http://www.hearst.com/careers" target="_blank">
							<img className="icon icon__large" src={hIcon} />
							<h6 className="m0">Career Inquiries</h6>
						</a>
					</figure>
					<figure className="centerXY flex-column">
						<img className="icon icon__large" src={pressIcon} />
						<h6 className="m0">Press Inquiries</h6>
					</figure>
				</div>
			</section>
		);
	}
};

export default Contacts;

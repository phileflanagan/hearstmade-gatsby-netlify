import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../brand/logos/logo.svg';

import './Navbar.sass';

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: ''
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active'
						})
					: this.setState({
							navBarActiveClass: ''
						});
			}
		);
	};

	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main-navigation">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item centerY" title="Logo">
						<img src={logo} alt="Hearstmade" style={{ margin: 0 }} />
					</Link>
					{/* Hamburger menu */}
					<div className={`burger ${this.state.navBarActiveClass}`} onClick={() => this.toggleHamburger()}>
						<span />
						<span />
						<span />
					</div>
				</div>
				<div id="navMenu" className={`menu ${this.state.navBarActiveClass}`}>
					<div className="oa centerXY flex-column fill">
						<Link className="navbar-item" to="/about">
							About
						</Link>
						<Link className="navbar-item" to="/casestudy">
							Case Studies
						</Link>
						<Link className="navbar-item" to="/contact">
							Contact
						</Link>
						<Link className="navbar-item" to="/contact/examples">
							Form Examples
						</Link>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;

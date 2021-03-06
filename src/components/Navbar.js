import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../brand/logos/logo.svg';
import SocialIcons from './SocialIcons';

import './Navbar.sass';

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: '',
            visible: true,
            prevScrollPos: 99999,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, {
            passive: true,
        });
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: 'is-active',
                      })
                    : this.setState({
                          navBarActiveClass: '',
                      });
            }
        );
    };

    handleScroll = () => {
        const { prevScrollPos } = this.state;
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 450 || this.state.active) {
            this.setState({
                prevScrollPos: currentScrollPos,
                visible: true,
            });
        } else if (prevScrollPos < currentScrollPos) {
            this.setState({
                prevScrollPos: currentScrollPos,
                visible: false,
            });
        } else {
            this.setState({
                prevScrollPos: currentScrollPos,
                visible: true,
            });
        }
    };

    render() {
        return (
            <nav
                className={`navbar ${
                    !this.state.visible ? 'navbar__hidden' : ''
                }`}
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item centerY" title="Logo">
                        <img
                            src={logo}
                            alt="Hearstmade"
                            style={{ margin: 0 }}
                        />
                    </Link>
                    {/* Hamburger menu */}
                    <div
                        className={`burger ${this.state.navBarActiveClass}`}
                        onClick={() => this.toggleHamburger()}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div
                    id="navMenu"
                    className={`menu ${this.state.navBarActiveClass}`}
                >
                    <div id="navList">
                        <Link
                            className="navbar-item"
                            to="/"
                            activeClassName="active"
                        >
                            Home
                        </Link>
                        <Link
                            className="navbar-item"
                            to="/about"
                            activeClassName="active"
                        >
                            About
                        </Link>
                        <Link
                            className="navbar-item"
                            to="/services"
                            activeClassName="active"
                        >
                            Services
                        </Link>
                        <Link
                            className="navbar-item"
                            to="/casestudy"
                            activeClassName="active"
                        >
                            Case Studies
                        </Link>
                        <Link
                            className="navbar-item"
                            to="/contact"
                            activeClassName="active"
                        >
                            Contact
                        </Link>
                        <SocialIcons size={'medium'} />
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;

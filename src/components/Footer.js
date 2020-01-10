import React from 'react';
import { Link } from 'gatsby';

import './Footer.sass';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer df">
                <div className="footer__left">
                    &copy; 2020 HearstMade. All Rights Reserved.
                </div>
                <div className="footer__right">
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Service</Link>
                </div>
            </footer>
        );
    }
};

export default Footer;

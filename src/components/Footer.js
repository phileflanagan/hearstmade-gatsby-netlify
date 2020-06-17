import React from 'react';
import { Link } from 'gatsby';

import './Footer.sass';

import SocialIcons from './SocialIcons';

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
                <div className="footer__center">
                    <SocialIcons size="small" />
                </div>
                <div className="footer__right">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Use</Link>
                </div>
            </footer>
        );
    }
};

export default Footer;

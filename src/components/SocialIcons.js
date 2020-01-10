import React from 'react';
import instaIcon from '../brand/icons/social-insta.svg';
import vimeoIcon from '../brand/icons/social-vimeo.svg';
import linkedinIcon from '../brand/icons/social-linkedin.svg';
import './SocialIcons.sass';
const SocialIcons = ({ size }) => {
	return (
		<div className="social">
			<a href="https://www.linkedin.com/company/hearst-magazines/" target="_blank">
				<img className={`icon ${!!size ? 'icon__' + size : ''}`} src={linkedinIcon} alt="LinkedIn Icon" />
			</a>
			<a href="https://vimeo.com/hearstmade" target="_blank">
				<img className={`icon ${!!size ? 'icon__' + size : ''}`} src={vimeoIcon} alt="Vimeo Icon" />
			</a>
			<a href="https://www.instagram.com/hearst_made/" target="_blank">
				<img className={`icon ${!!size ? 'icon__' + size : ''}`} src={instaIcon} alt="Instagram Icon" />
			</a>
		</div>
	);
};

export default SocialIcons;

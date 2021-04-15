import React from 'react';
import PropTypes from 'prop-types';
import LogoImg from '../../assets/images/clogo.svg';
import './logo.css';

const Logo = (props) => {
	return (
		<div className="logo">
			<img className={props.size} src={LogoImg} alt="Site's logo" />
			<h1>SNESMANIA</h1>
		</div>
	);
};

Logo.propTypes = {
	size: PropTypes.string
};

export default Logo;

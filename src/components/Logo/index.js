import React from 'react';
import LogoImg from '../../assets/images/clogo.svg';
import './logo.css';

const Logo = () => {
	return (
		<div className="logo">
			<img src={LogoImg} alt="Site's logo" />
			<h1>SNESMANIA</h1>
		</div>
	);
};

export default Logo;

import React, { useState } from 'react';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import MenuToggler from '../MenuToggler';
import OpenMenuIcon from '../../assets/images/openMenu.svg';
import CloseMenuIcon from '../../assets/images/closeMenu.svg';
import BulbIcon from '../../assets/images/bulb.svg';
import './header.css';

const Header = (props) => {
	const [openMenu, setOpenMenu] = useState(false);
	const openIcon = OpenMenuIcon;
	const closeIcon = CloseMenuIcon;

	return (
		<header className="container">
			<div className="logo-container">
				<Logo />
				<MenuToggler handleClick={() => setOpenMenu(!openMenu)}>
					<img src={openMenu ? closeIcon : openIcon} alt="Toggle menu" className="toggler" />
				</MenuToggler>
			</div>
			<nav className={openMenu ? 'nav active' : 'nav'}>
				<ul className="menu">
					<li>Home</li>
					<li>Reviews</li>
					<li>About</li>
					<li>Contact</li>
					<li className="bulbContainer" aria-label="Toggle theme" onClick={props.handleClick}>
						<img src={BulbIcon} alt="" className="bulb" />
					</li>
				</ul>
			</nav>
		</header>
	);
};

Header.propTypes = {
	handleClick: PropTypes.func
};

export default Header;

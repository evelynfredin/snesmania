import React, { useState } from 'react';
import Logo from '../Logo';
import MenuToggler from '../MenuToggler';
import OpenMenuIcon from '../../assets/images/openMenu.svg';
import CloseMenuIcon from '../../assets/images/closeMenu.svg';
import './header.css';

const Header = () => {
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
				</ul>
			</nav>
		</header>
	);
};

export default Header;
